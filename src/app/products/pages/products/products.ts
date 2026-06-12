import { Component, inject } from '@angular/core';
import { Button, Textbox } from '@shared/ui';
import { Api } from 'src/app/core/services/api/api';

@Component({
  selector: 'app-products',
  imports: [Button, Textbox],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  private apiService = inject(Api);
}
