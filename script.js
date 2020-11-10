// En este ejercicio deberéis realizar algunos cambios sobre las dos listas incluidas en "index.html".
// En la primera lista tendréis que hacer lo siguiente:
//    * Añadid la clase "element-n" a cada "span" de la lista, siendo "n" el número del lugar que ocupa en la lista (por ejemplo el segundo "span" de la lista tendría la clase "element-2"). Para ello, haced uso de los selectores de nodo (parentNode, nextSibling, firstChild...) partiendo del "span" con la clase "selected" siempre.
//    * Tras añadir las clases, haced uso de "querySelectorAll" para obtener solo los elementos "li" con valor par (teniendo en cuenta que el primer elmento es el 1) y, a continuación, eliminadlos.

//En la segunda lista, que en principio está vacía, deberéis hacer esto:
//    * Tenéis que generar dentro de esta lista, nodo a nodo, la misma estructura que ha quedado en la primera lista en la que realizastéis los cambios. Tiene que quedar igual, con la misma jerarquía y con las mismas clases, pero con la diferencia de que en vez de elementos "span" deben ser botones. Para replicar los elementos de la primera lista no hace falta que la recorráis, podéis simplemente generar cada elemento "a mano" una detrás de otro (aunque si usáis la lista de referencia para hacer algún tipo de bucle, mejor)
//    * Después de generar esta segunda lista, añadid el atributo disabled al último botón.
// Suerte!

window.addEventListener("load", onLoad);
/**
 * Funcion para actuar sobre la primera lista
 */
const changeFirstList = () => {
  let spanSelected = document.getElementsByClassName("selected");
  let spanSelectedFather = spanSelected[0].parentNode;
  let list = spanSelectedFather.parentNode;
  let spanList = list.getElementsByTagName("span");
  let cont = 1;
  for (s of spanList) {
    s.setAttribute("class", "element-" + cont);
    cont++;
  }
  let spanToDelete = document.querySelectorAll(".element-2, .element-4");
  list.removeChild(spanToDelete[0].parentNode);
  list.removeChild(spanToDelete[1].parentNode);
};
/**
 * Funcion para actuar sobre la segunda lista
 */
const changeSecondList = () => {
  let secondList = document.getElementById("list2");
  let elementosLi = document.getElementById("list1").getElementsByTagName("li");

  for (e of elementosLi) {
    let elementoLi = document.createElement("li");
    let elementoSpan = e.firstChild;
    let elementoButton = document.createElement("button");

    elementoButton.innerHTML = elementoSpan.innerHTML;
    elementoButton.setAttribute("class", elementoSpan.className);

    elementoLi.appendChild(elementoButton);
    secondList.appendChild(elementoLi);
  }
};

c;

function onLoad() {
  console.log("Ejercicio 2 JavaScript por Alvaro Rueda");
  changeFirstList();
  changeSecondList();
}
