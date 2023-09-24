import { Component } from '@angular/core';
//import askQuestion from 'prompt.js';


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
  textBox1Input: string = '';
  textBox2Input: string = '';

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
        const inputText = this.textBox1Input;
        //this.outputText = askQuestion(inputText);
      } else if (textBoxId === 'textBox2') {
        const inputText = this.textBox2Input;
        //this.outputText = askQuestion(inputText);
      }
      this.isLoading = false;
    }, 3000);
  }
}
