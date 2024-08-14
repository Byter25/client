import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiSenatiService } from '../../core/services/apiSenati.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'about',
  standalone: true,
  providers: [ApiSenatiService],
  imports: [CommonModule, HttpClientModule],
  template: `<div
    class="w-full mx-auto md:w-2/3 flex flex-col justify-center bg-white md:px-4"
  >

      <p class=" p-4 text-3xl font-bold bg-yellow-400 text-white my-3">
        PROYECTA TU HOGAR
      </p>
      <section class="md:flex">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
          repellendus sed ullam ducimus facere illum eos rem dolore vero
          voluptatem necessitatibus obcaecati adipisci natus voluptate pariatur
          beatae? Nisi, distinctio. Saepe. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Neque reiciendis distinctio consectetur
          iure delectus asperiores ratione. Provident, dolorum. Mollitia
          veritatis, necessitatibus nobis at nemo beatae in optio nulla ipsa
          laboriosam?
        </p>
        <img
          src="assets/camas/cama1.jpeg"
          alt=""
          class=" h-72 md:mx-2 m-auto"
        />
      </section>
      <p class="p-4 text-3xl font-bold bg-yellow-400 text-white my-3">
        DISEÑA ENSERES DOMESTICOS
      </p>
      <section class="md:flex">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
          repellendus sed ullam ducimus facere illum eos rem dolore vero
          voluptatem necessitatibus obcaecati adipisci natus voluptate pariatur
          beatae? Nisi, distinctio. Saepe. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Neque reiciendis distinctio consectetur
          iure delectus asperiores ratione. Provident, dolorum. Mollitia
          veritatis, necessitatibus nobis at nemo beatae in optio nulla ipsa
          laboriosam?
        </p>
        <img
          src="assets/camas/cama1.jpeg"
          alt=""
          class=" h-72 md:mx-2 m-auto"
        />
      </section>
      <p class="p-4 text-3xl font-bold bg-yellow-400 text-white my-3">
        DECORA HABITACIONES
      </p>
      <section class="md:flex">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
          repellendus sed ullam ducimus facere illum eos rem dolore vero
          voluptatem necessitatibus obcaecati adipisci natus voluptate pariatur
          beatae? Nisi, distinctio. Saepe. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Neque reiciendis distinctio consectetur
          iure delectus asperiores ratione. Provident, dolorum. Mollitia
          veritatis, necessitatibus nobis at nemo beatae in optio nulla ipsa
          laboriosam?
        </p>
        <img
          src="assets/camas/cama1.jpeg"
          alt=""
          class=" h-72 md:mx-2 m-auto"
        />
      </section>
  </div>`,
})
export class AboutComponent {}
