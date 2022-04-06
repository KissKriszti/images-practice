const parseJSON = async (url) => {
    const response = await fetch(url);
    return response.json();
};

const swiperComponent = (data,comp) => {
    return `
    <div class="swiper">
        <div class="swiper-wrapper">
            ${data.map(img => comp(img)).join("")}
        </div>
    </div>
    `;
}; 

const swiperSlideComponent = ({title,filename}) => {
    return `
    <div class="swiper-slide">
        <h2>${title}</h2>
        <img src="/public/images/${filename}">
    </div>
    `;
};

window.addEventListener('load', async () => {

    const rootElement = document.getElementById("root");
    const result = await parseJSON("/image-list");

    rootElement.insertAdjacentHTML('beforeend', swiperComponent(result, swiperSlideComponent));

    const swiper = new Swiper(".swiper", {
        loop: true
    });



});