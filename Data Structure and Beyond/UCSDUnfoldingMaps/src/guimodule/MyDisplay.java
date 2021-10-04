package guimodule;

import processing.core.PApplet;

public class MyDisplay extends PApplet {

	private static final long serialVersionUID = 1L;

	@Override
	public void setup() {
		size(400, 400);
		background(250, 250, 250);
	}

	@Override
	public void draw() {

		fill(255, 255, 0);
		ellipse(width / 2, height / 2, height, height);
		
		fill(0, 0, 0);
		ellipse(width/3, width/3, width/15, width/15);
		ellipse((float)(width * 0.7), width/3, width/15, width/15);
		
		//noFill();
		arc(width/2, width/2, width/2, width/2, 0, PI);
		
		
		
	}

}
