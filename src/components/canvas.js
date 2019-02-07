
import React, { Component } from 'react';

class Canvas extends Component {
	state = {
		hide: '90',
		jLines: [],
		jRect: [],
	}

	componentDidMount() {
		const canvas = this.refs.canvas
		const ctx = canvas.getContext("2d")
		const img = this.refs.image
		const cW = ctx.canvas.width
		const cH = ctx.canvas.height;
		const middleX = cW / 2
		const middleY = cH / 2

		
		let Rectangle = class {
			constructor(rx, ry, rw, rh, clr) {
				this.x = rx;
				this.y = ry;
				this.w = rw;
				this.h = rh;
				this.clr = clr
			}

			renderRect = (ctx, rx, ry, rw, rh, clr) => {
				ctx.fillStyle = clr;
				ctx.fillRect(rx - rw, ry - rh, rw, rh);
			}
		}

		let	drawRectangles = (Rectangles) => {
			Rectangles.forEach((rect) => {
				rect.renderRect(ctx, rect.x, rect.y, rect.w,rect.h, rect.clr);
			})
		}
		
	

		let collectRect = (rect) => {
			let jRectNew = this.state.jRect;
			jRectNew.push(rect)
			this.setState({
				jRect: jRectNew,
			})
			drawRectangles(this.state.jRect);
		}

		let rect1 = new Rectangle(middleX / 1.31, middleY / 1.39, 20, 5, 'blue');
		let rect2 = new Rectangle(middleX / 1.41, middleY / 1.39, 20, 5, 'red');
		let rect3 = new Rectangle(middleX / 1.53, middleY / 1.39, 20, 5, 'green');
		let rect4 = new Rectangle(middleX / 1.31, middleY / 1.43, 20, 6, 'blue');
		let rect5 = new Rectangle(middleX / 1.41, middleY / 1.43, 20, 6, 'red');
		let rect6 = new Rectangle(middleX / 1.53, middleY / 1.43, 20, 6, 'green');
		let rect7 = new Rectangle(middleX / 1.53, middleY / 1.37, 20, 5, 'purple');
		let rect8 = new Rectangle(middleX / 1.53, middleY / 1.34, 20, 5, 'red');
		let rect9 = new Rectangle(middleX / 1.31, middleY / 1.34, 50, 8, 'green');
		let rect10 = new Rectangle(middleX / 1.31, middleY / 1.08, 3, 40, 'yellow');
		let rect11 = new Rectangle(middleX / 1.33, middleY / 1.08, 8, 40, 'blue');
		let rect12 = new Rectangle(middleX / 1.37, middleY / 1.08, 6, 40, 'orange');
		let rect13 = new Rectangle(middleX / 1.40, middleY / 1.03, 7.5, 50, 'purple');
		let rect14 = new Rectangle(middleX / 1.39, middleY / 1.004, 10, 60, 'red');
		let rect15 = new Rectangle(middleX / 1.47, middleY / 1.004, 20, 7, 'red');
		let rect16 = new Rectangle(middleX / 1.47, middleY / 1.05, 20, 7, 'blue');
		let rect17 = new Rectangle(middleX / 1.47, middleY / 1.035, 20, 7, 'green');
		let rect18 = new Rectangle(middleX / 1.56, middleY / 1.15, 23, 3, 'purple');
		let rect19 = new Rectangle(middleX / 1.56, middleY / 1.07, 20, 17, 'yellow');
		let rect20 = new Rectangle(middleX / 1.71, middleY / 1.07, 5, 17, 'orange');
		let rect21 = new Rectangle(middleX / 1.32, middleY / 1.07, 5, 55, 'purple');


		collectRect(rect1);
		collectRect(rect2);
		collectRect(rect3);
		collectRect(rect4);
		collectRect(rect5);
		collectRect(rect6);
		collectRect(rect7);
		collectRect(rect8);
		collectRect(rect9);
		collectRect(rect10);
		collectRect(rect11);
		collectRect(rect12);
		collectRect(rect13);
		collectRect(rect14);
		collectRect(rect15);
		collectRect(rect16);
		collectRect(rect17);
		collectRect(rect18);
		collectRect(rect19);
		collectRect(rect20);
		collectRect(rect21);

		let Line = class {
			constructor(startX, startY, size, lineWidth, clr) {
				this.startX = startX;
				this.startY = startY;
				this.size = size;
				this.lineWidth = lineWidth;
				this.clr = clr;
			}
			renderLine = (ctx, startX, startY, size, lineWidth, clr) => {
				ctx.beginPath();
				ctx.lineWidth = lineWidth;
				ctx.moveTo(startX, startY);
				ctx.lineTo(startX + size, startY + size);
				ctx.stroke()
			}
		}

		let collectLine = (line) => {
			let jLinesNew = this.state.jLines;
			jLinesNew.push(line)
			this.setState({
				jLines: jLinesNew,
			})
		}

		//bottom of right angle on bottom of j to the right
		let line1 = new Line(middleX / 1.73, middleY / 1.07, 12, 3, 'blue');
		let line3 = new Line(middleX / 1.72, middleY / 1.08, 12, 5, 'blue');
		let line4 = new Line(middleX / 1.72, middleY / 1.09, 12, 5, 'blue');
		let line5 = new Line(middleX / 1.72, middleY / 1.1, 12, 8, 'blue');
		
		//bottom of right angle j to the left
		let line2 = new Line(middleX / 1.4, middleY / 1.08, 8, 18, 'blue');
		
		collectLine(line1);
		collectLine(line2);
		collectLine(line3);
		collectLine(line4);
		collectLine(line5);

	let	drawLines = (lines) => {
			lines.forEach((line) => {
				line.renderLine(ctx, line.startX, line.startY, line.size, line.lineWidth, line.clr);
			})
		}
		drawLines(this.state.jLines);
		this.handleOnclick(drawLines)
		console.log(this.state.jLines)
	}
	

	handleOnclick = (drawLines) => {

		drawLines(this.state.jLines);

		let lineArray = this.state.jLines;

		for(let i =0; i<10; i++){
			lineArray.forEach((line) => {
				line.startX = line.startX + i;
			})
			this.setState({
				jLines: lineArray
			})

		}
	
		
	}

	render() {
		return <div>
			<canvas ref="canvas" width={640} height={425} />
			{/* <img ref="image" src={this.props.imgURL} className="name" /> */}
			<button onClick={this.handleOnclick}>move</button>
		</div>
	}

}
export default Canvas;