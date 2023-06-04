import {Component, OnInit, ViewChild} from '@angular/core';
import {Button} from "bootstrap";

@Component({
  selector: 'camera',
  templateUrl: './camera.component.html'
})
export class CameraComponent {
  private constraints = {
    video: true
  }
  private track: any;
  private mediaRecorder?: MediaRecorder;

  async requestMedia() {
    let stream = null;
    try {
      stream = await navigator.mediaDevices.getUserMedia(this.constraints);
      /* use the stream */
      if (stream){
        const videoTracks = stream.getVideoTracks()
        this.mediaRecorder = new MediaRecorder( stream, {mimeType: "video/webm"});
        this.track = videoTracks[0]
        alert(`Getting video from: ${this.track.label}`)
        document.querySelector('video').srcObject = stream
      } else {
        console.log('no stream')
      }
    } catch (err) {
      /* handle the error */
      console.log(err)
    }
  }
}
