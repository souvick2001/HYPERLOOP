import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  quantity: number = 2;
  searchQuery: string = '';

  constructor(private router: Router) {}

  increaseQty(): void {
    this.quantity++;
  }

  decreaseQty(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  onBuyNow(): void {
    console.log(`Adding ${this.quantity} item(s) to cart`);
    alert(`Adding ${this.quantity} item(s) to cart!`);
    // Implement your cart logic here
    // Example: this.cartService.addToCart(this.quantity);
  }

  onContinueShopping(): void {
    console.log('Continue shopping clicked');
    // Navigate to products page
    // this.router.navigate(['/product']);
  }

  onUserIconClick(): void {
    console.log('User icon clicked');
    // Navigate to user profile or login
    // this.router.navigate(['/profile']);
  }

  onSideImageClick(imageNumber: number): void {
    console.log(`Side image ${imageNumber} clicked`);
    // You can implement navigation or modal display here
  }
}