Creates a sunburst effect on a canvas.  Now you can be all Web 2.0.

Basic usage:
- include sunburst.js on your page
- include a canvas on your page
- grab a reference to the canvas element
- pass that reference to Sunburst.Draw()

Basic example:
<!DOCTYPE html>
<html lang="en">
<head>
<title></title>
<script src="sunburst.js"></script>
<style>
canvas {
	border: 1px solid black;
}
</style>
</head>
<body>
<canvas id="burst" width="400" height="200"></canvas>
<script language="javascript">
var canvas = document.getElementById("burst");
Sunburst.Draw(canvas);
</script>
</body>
</html>

Extended properties:
You can pass a second parameter to Sunburst.Draw, which may contain the following keys:
{
  bars: number of colored bars to draw,
  fatness: how thick should the bars be, as a percentage of the height of the canvas,
  color: what color should the bars be,
  backcolor: what color should the negative space be
}

Extended example:
<!DOCTYPE html>
<html lang="en">
<head>
<title></title>
<script src="sunburst.js"></script>
<style>
canvas {
	border: 1px solid black;
}
</style>
</head>
<body>
<canvas id="burst" width="400" height="200"></canvas>

<script language="javascript">
var canvas = document.getElementById("burst");
Sunburst.Draw(canvas, {bars:24, fatness:10, color:"orange", backcolor:"#990000"});

</script>
</body>
</html>