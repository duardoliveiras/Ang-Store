import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImgbbService } from '../../services/imgbb.service';
import { CategoriesService } from '../../services/categories.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  categories: string[] = []; // This is an array of strings

  constructor(private fb: FormBuilder, private readonly imgbbService : ImgbbService, private categoriesService: CategoriesService ){
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      file: ['', [Validators.required]],
      url: [''],
    });
  }
  ngOnInit(): void {
    this.categories = this.categoriesService.getCateogories();
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
  async submit(){
    if(this.up){
      const imgUrl = await this.imgbbService.upload(this.up);
      this.form.get('url')?.setValue(imgUrl);
    }
    console.log(this.form.value);
  }
}
