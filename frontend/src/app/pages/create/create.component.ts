import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImgbbService } from '../../services/imgbb.service';
import { UrlSegment } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private readonly imgbbService : ImgbbService){
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      file: ['', [Validators.required]]
    });
  }
  up: File | null = null;
  inputChange(e : Event){
    const input = e.target as HTMLInputElement;
    if(input.files?.length){
      const file = input.files[0];
      console.log(file);
      this.up = file;
    }

  }
  submit(){
    const formData = this.form.value;
    console.log(formData);
    if(this.up){
      this.imgbbService.upload(this.up).subscribe((url) => console.log(url));
    }
  }
}
