class User {
  email;
  constructor(email) {
    this.email = email;
  }
  get email() {
    return this.email;
  }
  set email(newEmail) {
    this.email = newEmail;
  }
}
class ContentEditor extends User {
  constructor({ email, posts }) {
    super(email);
    this.posts = posts;
  }
  get posts() {
    return this.post;
  }
  set posts(newPost) {
    this.post = newPost;
  }
}
const editor = new ContentEditor({ email: 'mango@mail.com', posts: [] });
const user = new User('email@mail.com');
console.log(user);
console.log(editor);
console.log(editor.email);
editor.email = 'poly@mail.com';
console.log(editor.email);
editor.post = [1, 2];
console.log(editor.post);