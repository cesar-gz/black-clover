import { Component } from '@angular/core';
//@ts-ignore
import { askQuestion } from './AI.js'

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  textBox1Visible = false;
  textBox2Visible = false;
  isLoading = false;
  outputText: string = '';

  showTextBox(textBoxId: string) {
    if (textBoxId === 'textBox1') {
      this.textBox1Visible = true;
      this.textBox2Visible = false;
    } else if (textBoxId === 'textBox2') {
      this.textBox1Visible = false;
      this.textBox2Visible = true;
    }
  }

  submitTextBox(textBoxId: string) {
    this.isLoading = true;
    this.outputText = '';

    setTimeout(() => {
      if (textBoxId === 'textBox1') {
        this.outputText = 'Formatted text for professional office setting';
      } else if (textBoxId === 'textBox2') {
        this.outputText = 'Formatted text for Donald Trump style';
      }
      this.isLoading = false;
    }, 3000);
  }
}
