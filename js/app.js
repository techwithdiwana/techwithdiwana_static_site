async function loadProducts(){
  try{
    const r = await fetch('assets/products.json');
    const data = await r.json();
    const container = document.getElementById('cards');
    data.products.forEach(p=>{
      const d = document.createElement('div');
      d.className = 'card';
      d.innerHTML = `
        <div class="img">${p.image ? '<img src="'+p.image+'" alt="'+p.name+'" style="width:100%;height:100%;object-fit:cover;border-radius:6px" />' : 'Image'}</div>
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
      `;
      container.appendChild(d);
    });
  }catch(e){
    console.error('Failed to load products',e);
  }
}
document.addEventListener('DOMContentLoaded', loadProducts);