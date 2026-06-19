export interface CatsCardProps {
  name: string;
  age: number;
  img: string;
  likes: string[];
}

export const cats = [
  {
    id: 1,
    name: "Whiskers",
    age: 2,
    likes: ["napping", "sunbeams", "treats"],
    img: "/alex-meier-KGiQFgF7dkc-unsplash.avif",
  },
  {
    id: 2,
    name: "Mittens",
    age: 4,
    likes: ["chasing lasers", "climbing trees", "birds"],
    img: "/cyrus-chew-Dl39g6QhOIM-unsplash.avif",
  },
  {
    id: 3,
    name: "Shadow",
    age: 1,
    likes: ["hide and seek", "feathers", "cuddles"],
    img: "/jae-park-7GX5aICb5i4-unsplash.avif",
  },
  {
    id: 4,
    name: "Pumpkin",
    age: 3,
    likes: ["yarn balls", "windowsills", "catnip"],
    img: "/erik-jan-leusink-IbPxGLgJiMI-unsplash.avif",
  },
  {
    id: 5,
    name: "Luna",
    age: 5,
    likes: ["string toys", "boxes", "gentle pets"],
    img: "/manja-vitolic-gKXKBY-C-Dk-unsplash.avif",
  },
  {
    id: 6,
    name: "Oliver",
    age: 6,
    likes: ["laser pointers", "scratching posts", "nap time"],
    img: "/tim-van-der-kuip-mdRJhxlsuGM-unsplash.avif",
  },
];