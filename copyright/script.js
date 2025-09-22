function copyright(element, holder) {
    const date = new Date();
    const year = date.getFullYear();
    element.innerHTML = `&copy; ${year} ${holder}`;
}

const element = document.querySelector('#copyright');
copyright(element, "Domagoj Štrekelj");
