function renderSquare() {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
  camera.position.z = 3;

  var renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  var square = new THREE.Mesh(geometry, material);
  scene.add(square);

  function animate() {
    requestAnimationFrame(animate);
    square.rotation.x += 0.01;
    square.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  animate();
}

function renderPreview() {
  var shapeSelect = document.getElementById("shape-select");
  var selectedShape = shapeSelect.value;

  var previewContainer = document.getElementById("preview-container");
  previewContainer.innerHTML = "";

  if (selectedShape === "square") {
    renderSquare();
  } else if (selectedShape === "cylinder") {
    // 渲染圆柱体的代码
  } else if (selectedShape === "ellipse") {
    // 渲染椭圆的代码
  }
}
