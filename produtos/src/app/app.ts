import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface Produto {
  nome: string;
  valor: number;
  imagem: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  produtos: Produto[] = [
    {
      nome: 'Camiseta Angular',
      valor: 79.90,
      imagem: 'https://picsum.photos/id/1/200/150'
    },
    {
      nome: 'Caneca Programador',
      valor: 49.90,
      imagem: 'https://picsum.photos/id/10/200/150'
    },
    {
      nome: 'Mouse Gamer RGB',
      valor: 129.90,
      imagem: 'https://picsum.photos/id/25/200/150'
    },
    {
      nome: 'Teclado Mecânico',
      valor: 299.00,
      imagem: 'https://picsum.photos/id/30/200/150'
    },
    {
      nome: 'Headset Bluetooth',
      valor: 199.90,
      imagem: 'https://picsum.photos/id/40/200/150'
    }
  ];
}