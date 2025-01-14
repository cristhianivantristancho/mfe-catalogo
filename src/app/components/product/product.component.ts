import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProductImages } from '../../models/product.interface';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,ButtonModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {


  router = inject(Router);

  route = inject(ActivatedRoute);

  @Input() id:number = 0;
  @Input() idMongo:string = '';
  @Input() name:string = '';
  @Input() price:number = 0;
  @Input() imageUrl:string = '';

  rating:number = 2.5;

  ProductImages = ProductImages;


  goToDetail(){
      this.router.navigate(['/product-detail/',this.idMongo]);

  }

}
