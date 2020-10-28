let tmplChalkBoard = document.querySelector('template#chalk-board');

let boards = document.querySelectorAll('chalk-board');
Array.from(boards).forEach(board => {
  let $root = board.attachShadow({ mode: 'closed' });
  $root.appendChild(tmplChalkBoard.content.cloneNode(true));
});
