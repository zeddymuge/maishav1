import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule , FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'furaha-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit{
  FormData! : FormGroup;
  emailExists = false;
  constructor(private builder: FormBuilder,
    private contactService: ContactService){
  
  }
ngOnInit(){
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Company: new FormControl(''),
      Message: new FormControl('', [Validators.required])
    }) as FormGroup; 
}

onSubmit(formData: any) {
  if (this.FormData.valid && !this.emailExists) {
    const formDataValue = this.FormData.value;
    this.contactService.PostMessage(formDataValue).subscribe({
      next: (response) => {
        console.log('Success:', response);
      },
      error: (error) => {
        console.error('Error:', error);
      },
      complete: () => {
        console.log('Request completed');
      },
    });
  }
  console.log(formData);
}
}

