import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../core/api.service';
import Message from '../message/message';
import { AfterViewInit, AfterViewChecked, ElementRef } from '@angular/core';

@Component({
  selector: 'app-soniat',
  templateUrl: './soniat.component.html',
  styleUrls: [
    '../soniat/soniat.component.css'
  ]
})

export class SoniatComponent implements OnInit, AfterViewInit, AfterViewChecked {
  
  @ViewChild('chat') chatElement: ElementRef;
  @ViewChild('box') box: ElementRef;
  @ViewChild('input') input: ElementRef;

  soniatForm: FormGroup;
  messages: Message[] = [];
  mostrar: boolean = false;
  tittleChatBox:string="FAC";

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.soniatForm = this.formBuilder.group({
      message: ['', Validators.required]
    })
    this.saveMessage("Hola me llamo FAC y seré tu asesor oficial durante la consulta, por favor coméntame ¿En qué puedo ayudarte?",false)
  }
  ngAfterViewInit(){
    this.scrollToBottom();
    this.chatElement.nativeElement.focus()
  }
  ngAfterViewChecked(){
    this.scrollToBottom();
    this.chatElement.nativeElement.focus()
  }
  scrollToBottom(): void{
    try{
      this.box.nativeElement.scrollTop = this.box.nativeElement.scrollHeight;
    }catch(err){
      console.log(err)
    }
  }
  reset() {
    this.input.nativeElement.value = '';
  }
  onSubmit() {
    const question = this.soniatForm.controls.message.value;
    if (question != null) {
      this.saveMessage(question, true);
      this.apiService.extractToken().subscribe((data: string) => {
        //el subscribe tiene varias funciones (success, error)
        this.apiService.getAnswer(question, data).subscribe((response: string) => {
          this.saveMessage(response, false); 
        }, error => {
        })
      }, error => {
      });
    }
  }
  saveMessage(question: string, userMessage: boolean): void {
    this.messages.push({
      userMessage: userMessage,
      value: question
    })
  }
  toggleBox() {
    this.mostrar=!this.mostrar;
  } 
}
