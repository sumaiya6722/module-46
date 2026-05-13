
export async function getCategories() {
  const data = await fetch('https://openapi.programming-hero.com/api/news/categories').then(res => res.json());
  return data.data;
}

export async function getNewsCategoryById(category_id) {
  const data = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`).then(res => res.json());
  return data.data;
}

export async function getNewsDetailsById(news_id) {
  const data = await fetch(`https://openapi.programming-hero.com/api/news/${news_id}`).then(res => res.json());
  return data.data[0];
}
