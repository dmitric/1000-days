import React, { Component } from 'react';
import './App.css';
import statuses from './data/statuses.js';
import sfGifs from './data/gifs.js';
import moment from 'moment';
import Tappable from 'react-tappable';
import Hashids from 'hashids';

class App extends Component {
  constructor (props) {
    super(props);

    this.hashids = new Hashids("1000daysinsf", 10);
    
    let startingIndex = 0;
    let potentialStartingIndex = parseInt(this.hashids.decode(props.currentIndexHash.replace("#", ""))[0], 10);
    potentialStartingIndex = Math.max(0, Math.min(potentialStartingIndex, statuses.length-1));

    if (props.currentIndexHash) {
      startingIndex =  potentialStartingIndex || 0;
    } else {
      startingIndex = 0;
    }

    console.log(startingIndex);

    this.state = {
      currentIndex: startingIndex,
      statuses: statuses
    };

    this.arrivalDate = moment(new Date(2014, 0, 5));
    this.departureDate = moment(new Date(2016, 9, 1));

    this.nextStatus = this.nextStatus.bind(this);
    this.previousStatus = this.previousStatus.bind(this);
    this.resetStatus = this.resetStatus.bind(this);
    this.calculateReadingTime = this.calculateReadingTime.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleTap = this.handleTap.bind(this);
  }

  calculateReadingTime (index) {
    const status = this.state.statuses[index].status;
    const wordsPerSecond = 200 / 60;
    const totalWords = status.split(/\s+/g).length;
    const totalMillis = Math.max(2700 + (totalWords * 1000) / wordsPerSecond, 6000);
    return totalMillis;
  }

  componentDidMount () {
    this.timer = setTimeout(this.nextStatus, this.calculateReadingTime(this.state.currentIndex));
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount () {
    clearTimeout(this.timer);
    window.addEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress (event) {
    if (event.keyCode === 37) {
      this.previousStatus();
    } else if (event.keyCode === 39) {
      this.nextStatus();
    }
  }

  componentWillUpdate () {
    clearTimeout(this.timer);
  }

  componentDidUpdate () {
    this.timer = setTimeout(this.nextStatus, this.calculateReadingTime(this.state.currentIndex));
    window.location.hash = this.state.currentIndex !== 0 ? this.hashids.encode(this.state.currentIndex) : "";
  }

  nextStatus () {
    let nextStatusIndex = this.state.currentIndex + 1;
    
    if (nextStatusIndex >= this.state.statuses.length) {
      nextStatusIndex = 0;
    }
    
    this.setState({currentIndex: nextStatusIndex});
    
  }

  previousStatus () {

    let previousStatusIndex = this.state.currentIndex - 1;
    
    if (previousStatusIndex < 0) {
      previousStatusIndex = this.state.statuses.length - 1;
    }

    this.setState({currentIndex: previousStatusIndex});
  }

  resetStatus (e) {
    e.preventDefault();
    this.setState({currentIndex: 0});
  }

  handleTap (e) {
    const w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName('body')[0],
      width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
    
    const event = e.nativeEvent;
    const clientX = event.clientX || event.changedTouches[0].clientX;
    
    if (clientX/width >= 0.45) {
      this.nextStatus();
    } else {
      this.previousStatus();
    }
  }

  render() {
    const status = this.state.statuses[this.state.currentIndex];
    const statusDate = moment(status.date);
    return (
      <div className="App">
        <div className="footer">
          <a title="I'm Dmitri Cherniak. This is a project highlighting things I posted to social media about San Francisco while living there for 1,000 days."
            href="/" onClick={this.resetStatus}>i 1,000 DAYS IN SAN FRANCISCO</a>
        </div>
        <CanvasComponent currentIndex={this.state.currentIndex} />
        <Tappable onTap={this.handleTap}>
          <div className="App-body">
            <div className="App-status">
              <div className="quote">
                {status.status.split('\n').map((st, ii) => {
                  return <div key={ii}><span>{st}</span><br/></div>
                })}
              </div>
              <div className="date">
                <span>{ parseInt(moment.duration(statusDate.diff(this.arrivalDate)).asDays(), 10)} DAYS IN - {statusDate.format('MMMM Do, YYYY')}</span>
              </div>
            </div>
          </div>
        </Tappable>
      </div>
    );
  }
}

function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

class CanvasComponent extends React.Component {
  constructor (props) {
    super(props);
    this.palette = ["#292628", "#2966a4", "#edd035", "#e8502f", "#9a4e55", "#3b9764", "#68a5b9", "#bb98c4", "#86d052", "#aa9f52"];
    this.gifs = shuffle(sfGifs.data);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.updateCanvas = this.updateCanvas.bind(this);
    this.glitchCanvas = this.glitchCanvas.bind(this);
  }

  componentWillMount() {
    this.updateDimensions();
    var that = this;

    fetch('http://api.giphy.com/v1/gifs/search?q=san+francisco&limit=100&api_key=dc6zaTOxFJmzC').then(function(response) {
      var thatthis= that;
      response.json().then(function(data) {  
        thatthis.gifs = shuffle(data.data);
      });
    }).catch(function(error){
      console.log("error")
    });
  }
  
  componentDidMount () {
    window.addEventListener("resize", this.updateDimensions);
    this.updateCanvas();
    this.timer = setInterval(this.updateCanvas, 50);
  }
  
  componentWillUnmount () {
    window.removeEventListener("resize", this.updateDimensions);
    clearInterval(this.timer);
  }

  updateDimensions () {
    var w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

    this.setState({width: width, height: height});
  }

  updateCanvas () {
    const ctx = this.refs.canvas.getContext('2d');
    const cubeSize = 5;
    const widthCubes = 1 + this.state.width / cubeSize;
    const heightCubes = 1 + this.state.height / cubeSize;
    let chance = 0;

    for (let j=0; j < heightCubes; j++) {
      for (let i=0; i < widthCubes; i++) {
        chance = Math.random() * 100;

        if (chance >= 0 && chance < 49.5) {
          ctx.fillStyle = this.palette[0];
        } else if (chance >= 49.5 && chance < 61.3) {
          ctx.fillStyle = this.palette[1];
        } else if (chance >= 61.3 && chance < 69.2) {
          ctx.fillStyle = this.palette[2];
        } else if (chance >= 69.2 && chance < 77.1) {
          ctx.fillStyle = this.palette[3];
        } else if (chance >= 77.1 && chance < 83.9) {
          ctx.fillStyle = this.palette[4];
        } else if (chance >= 83.9 && chance < 90.2) {
          ctx.fillStyle = this.palette[5];
        } else if(chance >= 90.2 && chance < 94.4) {
          ctx.fillStyle = this.palette[6];
        } else if(chance >= 94.4 && chance < 97.6) {
          ctx.fillStyle = this.palette[7];
        } else if(chance >= 97.6 && chance < 99.2) {
          ctx.fillStyle = this.palette[8];
        } else if (chance >= 99.2) {
          ctx.fillStyle = this.palette[9];
        }

        ctx.fillRect(i*cubeSize, j*cubeSize, cubeSize, cubeSize);
      }
    }
  }

  glitchCanvas(canvas) {

    var ctx = canvas.getContext('2d');
    function randomIntFromInterval(min,max) {
      return Math.floor(Math.random()*(max-min+1)+min);
    }

    var
      // cache the width and height of the canvas locally
      x, y, w = canvas.width, h = canvas.height,

      // _len is an iterator limit, initially storing the number of slices
      // to create
      i, _len = randomIntFromInterval(1,6),

      // pick a random amount to offset the color channel
      channelOffset = (randomIntFromInterval(-_len*2, _len*2) * w * + randomIntFromInterval(-_len, _len)) * 4,

      // the maximum amount to offset a chunk of the image is a function of its width
      maxOffset = _len * _len / 100 * w,

      // vars for the width and height of the chunk that gets offset
      chunkWidth, chunkHeight,

      // create a temporary canvas to hold the image we're working on
      tempCanvas = document.createElement("canvas"),
      tempCtx = tempCanvas.getContext("2d"),

      srcData, targetImageData, data;

    // set the dimensions of the working canvas
    tempCanvas.width = w;
    tempCanvas.height = h;

    // draw the initial image onto the working canvas
    tempCtx.drawImage(canvas, 0, 0, w, h);

    // store the data of the original image for use when offsetting a channel
    srcData = tempCtx.getImageData(0, 0, w, h).data;

    // randomly offset slices horizontally
    for (i = 0; i < _len; i++) {

      // pick a random y coordinate to slice at
      y = randomIntFromInterval(0, h);

      // pick a random height of the slice
      chunkHeight = Math.min(randomIntFromInterval(1, h / 4), h - y);

      // pick a random horizontal distance to offset the slice
      x = randomIntFromInterval(1, maxOffset);
      chunkWidth = w - x;

      // draw the first chunk
      tempCtx.drawImage(canvas,
        0, y, chunkWidth, chunkHeight,
        x, y, chunkWidth, chunkHeight);

      // draw the rest
      tempCtx.drawImage(canvas,
        chunkWidth, y, x, chunkHeight,
        0, y, x, chunkHeight);
    }

    // get hold of the ImageData for the working image
    targetImageData = tempCtx.getImageData(0, 0, w, h);

    // and get a local reference to the rgba data array
    data = targetImageData.data;

    // Copy a random color channel from the original image into
    // the working canvas, offsetting it by a random amount
    //
    // ImageData arrays are a single dimension array that contains
    // 4 values for each pixel.
    // so, by initializing `i` to a random number between 0 and 2,
    // and incrementing by 4 on each iteration, we can replace only
    // a single channel in the image
    for(i = randomIntFromInterval(0, 3), _len = srcData.length; i < _len; i += 4) {
      data[i+channelOffset] = srcData[i];
    }

    // Make the image brighter by doubling the rgb values
    for(i = 0; i < _len; i++) {
      data[i++] *= 2;
      data[i++] *= 2;
      data[i++] *= 2;
    }

    // copy the tweaked ImageData back into the context
    tempCtx.putImageData(targetImageData, 0, 0);
    ctx.drawImage(tempCanvas, 0, 0);
  }

  componentDidUpdate () {
    this.updateCanvas();
  }

  render() {
    const styling = {
      width:this.state.width,
      height: this.state.height,
      backgroundImage: `url(${this.gifs[this.props.currentIndex % this.gifs.length].images.original.url})`
    };

    return (
      <div className="canvas-container">
        <canvas id="bg" ref="canvas" width={this.state.width} height={this.state.height} />
        <div id="blur" style={styling}></div>
      </div>
    );
  }
}

export default App;
