cc.Class({
    extends: cc.Component,

    properties: {

        run_node: {
			type: cc.Node,
			default: null,
        },

        item_root: {
        	type: cc.Node,
        	default: null,
        },
    },

    start() {
    	this.start_index = Math.random() * this.item_root.children.length; //[0 12)
    	this.start_index = Math.floor(this.start_index);
    	this.run_node.setPosition(this.item_root.children[this.start_index].getPosition());

    	this.is_run = false;

    	console.log("start_index:" + this.start_index);
    },

    start_click() {
    	this.end_index = Math.random() * this.item_root.children.length; //[0 12)
    	this.end_index = Math.floor(this.end_index);

    	this.is_run = true;
    	this.show_run_anim();

    	console.log("end_index:" + this.end_index);
    },

    show_run_anim() {

    	this.turns = Math.random() * 2; //[0 2)
		this.turns = Math.floor(this.turns) + 2;

    	this.run_path = [];

    	for(var i = this.start_index; i < this.item_root.children.length; i++)
    	{
    		this.run_path.push(this.item_root.children[i]);
    	}

    	for(var j = 0; j < this.turns; j++)
    	{
    		for(var i = 0; i < this.item_root.children.length; i++)
	    	{
	    		this.run_path.push(this.item_root.children[i]);
	    	}
    	}

    	for(var i = 0; i < this.end_index; i++)
    	{
    		this.run_path.push(this.item_root.children[i]);
    	}

    	this.step_speed = 5000;
    	this.damp = this.step_speed / (this.run_path.length - 1);
    	this.path_next_index = 1;

    	this.run_to_next();
    },

    run_to_next() {

    	if(this.path_next_index >= this.run_path.length)
    	{
    		this.is_run = false;
    		this.start_index = this.end_index;
    		return;
    	}

    	this.time_passed = 0;

    	var dst = this.run_path[this.path_next_index].getPosition();
    	var src = this.run_node.getPosition();
    	var dir = dst.sub(src);
    	var len = dir.mag();

    	this.step_time = len / this.step_speed;

    	this.run_node.x += dir.x;
    	this.run_node.y += dir.y;

		this.step_speed -= this.damp;
		this.path_next_index++;
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {

    	if(!this.is_run)
    	{
    		return;
    	}

		this.time_passed += dt;

		if(this.time_passed > this.step_time)
		{
			dt -= (this.time_passed-this.step_time);
		}

		if(this.time_passed >= this.step_time)
		{
			this.run_to_next();
		}
    },

});
