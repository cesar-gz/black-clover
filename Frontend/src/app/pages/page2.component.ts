import { Component } from '@angular/core';

@Component({
  selector: 'app-page2',
  template: `
            <link href="https://fonts.cdnfonts.com/css/black-clover-font" rel="stylesheet">
            <p class="title">Email Formatter</p>

            <div class="chat-container">
                <button id="button1" (click)="showTextBox('textBox1')">Professional</button>
                <button id="button2" (click)="showTextBox('textBox2')">Unprofessional</button>

                <div id="textBox1" [hidden]="!textBox1Visible">
                  <input type="text"
                    placeholder="The AI will format what you type here for a professional office setting">
                </div>

                <div id="textBox2" [hidden]="!textBox2Visible">
                  <input type="text" placeholder="The AI will format what you type here as if your Donald Trump">
                </div>
            </div>


            `,
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  textBox1Visible = false;
  textBox2Visible = false;

  showTextBox(textBoxId: string) {
    if (textBoxId === 'textBox1') {
      this.textBox1Visible = true;
      this.textBox2Visible = false;
    } else if (textBoxId === 'textBox2') {
      this.textBox1Visible = false;
      this.textBox2Visible = true;
    }
  }
}
