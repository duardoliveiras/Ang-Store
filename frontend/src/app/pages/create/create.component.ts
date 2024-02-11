import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImgbbService } from '../../services/imgbb.service';
import { CategoriesService } from '../../services/categories.service';
import { ProductService } from '../../services/product.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  categories: string[] = []; // This is an array of strings

  constructor(private fb: FormBuilder, 
      private readonly imgbbService : ImgbbService, 
      private categoriesService: CategoriesService,
      private productService: ProductService){
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
    //console.log(this.form.value);

    const product : any = {
      name: this.form.get('name')?.value,
      category: this.form.get('category')?.value,
      description: this.form.get('description')?.value,
      price: this.form.get('price')?.value,
      url: this.form.get('url')?.value
    }
    console.log(product);
    this.productService.postProduct(product).subscribe((response) =>{
        console.log(response);
    });

  }


}
