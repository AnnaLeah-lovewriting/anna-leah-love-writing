const posts = [
  { title: "Harry Potter’s First Year", link: "posts/poem-harry-potter.html", type: "Poem" },
  // Ví dụ thêm truyện: { title: "A Day at the Fair", link: "posts/story-sample.html", type: "Story" },
];

const ul = document.getElementById("posts-list");
posts.forEach(p => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>[${p.type}]</strong> <a href="${p.link}">${p.title}</a>`;
  ul.appendChild(li);
});
