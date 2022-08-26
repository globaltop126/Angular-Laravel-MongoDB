import { Injectable } from '@angular/core';

export type CommentType = {
  title: string;
  text: string;
  id: number;
  status: string;
  author: string;
  date: string;
  countSubcomments: number;
  votes: number;
};

@Injectable({
  providedIn: 'root',
})
export class DataCommentsService {
  allCommentsVisible: boolean = true;

  getAllComments: CommentType[] = [
    {
      title: 'Lorem ipsum dolor sit amet',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laboriosam molestias soluta nulla cumque provident abnisi similique quasi explicabo pariatur eius dolorem modi fugiat magni laborum beatae cum enim, voluptatem veniamitaque',
      id: 1,
      status: 'planned',
      author: 'Nile Green',
      date: 'July 09, 2022',
      countSubcomments: 4,
      votes: 10,
    },
    {
      title: 'Similique quasi explicabo pariatur eius',
      text: 'labore eligendi debitis animi. Cumque maiores obcaecati quae dignissimos inventore velit eius dicta, ex ut tempora quaerat!',
      id: 2,
      status: 'under review',
      author: 'Xerxes Mitchell',
      date: 'July 09, 2022',
      countSubcomments: 5,
      votes: 22,
    },
    {
      title: 'Consectetur adipisicing elit',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est aspernatur porro officiis expedita, error facilis',
      id: 3,
      status: 'in progress',
      author: 'Vincenzo Ramirez',
      date: 'July 09, 2022',
      countSubcomments: 2,
      votes: 6,
    },
    {
      title: 'Aut laboriosam molestias',
      text: 'Cumque quam ipsum quod accusamus repudiandae dignissimos, iusto magnam cupiditate tenetur adipisci neque nesciunt',
      id: 4,
      status: 'under review',
      author: 'Jax Martin',
      date: 'July 09, 2022',
      countSubcomments: 0,
      votes: 1,
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      text: 'Asperiores placeat sequi animi optio. Repudiandae fugiat fugit eligendi aliquid incidunt, neque cupiditate sint hic',
      id: 5,
      status: 'under review',
      author: 'Gustavo Henderson',
      date: 'July 09, 2022',
      countSubcomments: 0,
      votes: 2,
    },
    {
      title: 'Labore eligendi debitis animi',
      text: 'Tenetur reprehenderit veritatis laborum consequuntur culpa necessitatibus, corporis sit eligendi voluptates cum',
      id: 6,
      status: 'in progress',
      author: 'Quinlan Rivera',
      date: 'July 09, 2022',
      countSubcomments: 3,
      votes: 9,
    },
    {
      title: 'Cumque maiores obcaecati quae',
      text: 'Laboriosam commodi doloremque quam! Ducimus necessitatibus fugiat excepturi eius iusto, voluptatem recusandae',
      id: 7,
      status: 'under review',
      author: 'Israel Gray',
      date: 'July 09, 2022',
      countSubcomments: 6,
      votes: 20,
    },
    {
      title: 'Praesentium dolorem illo tempora',
      text: 'Praesentium dolorem illo tempora est eos laborum amet tenetur dicta et laudantium nemo sunt doloribus esse earum',
      id: 8,
      status: 'planned',
      author: 'Osman Robinson',
      date: 'July 09, 2022',
      countSubcomments: 2,
      votes: 4,
    },
    {
      title: 'Dignissimos inventore velit eius',
      text: 'Reiciendis explicabo voluptas culpa neque ut natus distinctio sunt officiis dolore error sit exercitationem, eos',
      id: 9,
      status: 'in progress',
      author: 'Ximenes Jackson',
      date: 'July 09, 2022',
      countSubcomments: 5,
      votes: 15,
    },
    {
      title: 'Ex ut tempora quaerat!',
      text: 'Aliquid molestias deserunt est, hic nam libero error aspernatur quibusdam consequatur, quae expedita nulla incidunt,',
      id: 10,
      status: 'under review',
      author: 'Declan Harris',
      date: 'July 09, 2022',
      countSubcomments: 1,
      votes: 11,
    },
  ];

  clickedComment?: CommentType;

  constructor() {}

  // Search Comment by id
  // getById(id: number): CommentType | undefined {
  //   return this.getAllComments.find((p) => p.id === id);
  // }

  returnNComments(num: number) {
    if (num === 0 || num >= this.getAllComments.length) {
      return this.getAllComments;
    }
    let arr: any = [];
    for (let i = 0; i < num; i++) {
      arr.push(this.getAllComments[i]);
    }
    return arr;
  }

  // temp method for demonstration subcomments system work
  openSubcomments(id: number) {
    this.clickedComment = this.getAllComments.find((p) => p.id === id);

    this.allCommentsVisible = false;
  }

  returnToAllComments(): void {
    this.allCommentsVisible = true;
  }
}
