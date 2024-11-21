function plate_extrude_1_outline_fn(){
    return new CSG.Path2D([[156.5,-65.3],[156.5,-59.0417772]]).appendArc([155.0089866,-57.1076281],{"radius":2,"clockwise":false,"large":false}).appendPoint([137.6224946,-52.5322354]).appendArc([137.374417,-52.4834759],{"radius":2,"clockwise":false,"large":false}).appendPoint([118.6298946,-50.0170914]).appendArc([118.3689856,-50],{"radius":2,"clockwise":false,"large":false}).appendPoint([95.7587532,-50]).appendArc([95.2497666,-50.0658509],{"radius":2,"clockwise":false,"large":false}).appendPoint([76.6224946,-54.9677646]).appendArc([76.374417,-55.0165241],{"radius":2,"clockwise":true,"large":false}).appendPoint([57.625583,-57.4834759]).appendArc([57.3775054,-57.5322354],{"radius":2,"clockwise":false,"large":false}).appendPoint([39.9910134,-62.1076281]).appendArc([38.5,-64.0417772],{"radius":2,"clockwise":false,"large":false}).appendPoint([38.5,-159.5]).appendArc([40.5,-161.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([61.2412468,-161.5]).appendArc([61.7502334,-161.4341491],{"radius":2,"clockwise":false,"large":false}).appendPoint([80.3775054,-156.5322354]).appendArc([80.625583,-156.4834759],{"radius":2,"clockwise":true,"large":false}).appendPoint([99.4659701,-154.0044776]).appendArc([99.5338591,-153.9943568],{"radius":2,"clockwise":false,"large":false}).appendPoint([114.3367268,-151.5272122]).appendArc([114.6655248,-151.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([124.8145745,-151.5]).appendArc([126.5690601,-152.539906],{"radius":2,"clockwise":true,"large":false}).appendPoint([132.0276259,-162.5149443]).appendArc([133.6078001,-163.5472398],{"radius":2,"clockwise":false,"large":false}).appendPoint([155.2553803,-165.4411577]).appendArc([155.6451813,-165.5147513],{"radius":2,"clockwise":true,"large":false}).appendPoint([169.2104545,-169.5028465]).appendArc([169.4915787,-169.6090268],{"radius":2,"clockwise":true,"large":false}).appendPoint([188.3874802,-178.4203303]).appendArc([191.0453323,-177.4529514],{"radius":2,"clockwise":false,"large":false}).appendPoint([199.244317,-159.8701722]).appendArc([198.6546482,-157.4424056],{"radius":2,"clockwise":false,"large":false}).appendPoint([182.6080424,-145.0419157]).appendArc([181.8309894,-143.4601995],{"radius":2,"clockwise":true,"large":false}).appendPoint([181.8008135,-69.2991862]).appendArc([179.8008137,-67.3],{"radius":2,"clockwise":false,"large":false}).appendPoint([158.5,-67.3]).appendArc([156.5,-65.3],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[157.4504216,-157.5791206],[171.939309,-161.4614062]]).appendPoint([175.8215946,-146.9725188]).appendPoint([161.3327072,-143.0902332]).appendPoint([157.4504216,-157.5791206]).close().innerToCAG()
.union(
    new CSG.Path2D([[137.5,-76.5],[152.5,-76.5]]).appendPoint([152.5,-61.5]).appendPoint([137.5,-61.5]).appendPoint([137.5,-76.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[137.5,-95.5],[152.5,-95.5]]).appendPoint([152.5,-80.5]).appendPoint([137.5,-80.5]).appendPoint([137.5,-95.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[137.5,-114.5],[152.5,-114.5]]).appendPoint([152.5,-99.5]).appendPoint([137.5,-99.5]).appendPoint([137.5,-114.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[137.5,-133.5],[152.5,-133.5]]).appendPoint([152.5,-118.5]).appendPoint([137.5,-118.5]).appendPoint([137.5,-133.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[118.5,-71.5],[133.5,-71.5]]).appendPoint([133.5,-56.5]).appendPoint([118.5,-56.5]).appendPoint([118.5,-71.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[118.5,-90.5],[133.5,-90.5]]).appendPoint([133.5,-75.5]).appendPoint([118.5,-75.5]).appendPoint([118.5,-90.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[118.5,-109.5],[133.5,-109.5]]).appendPoint([133.5,-94.5]).appendPoint([118.5,-94.5]).appendPoint([118.5,-109.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[118.5,-128.5],[133.5,-128.5]]).appendPoint([133.5,-113.5]).appendPoint([118.5,-113.5]).appendPoint([118.5,-128.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[118.5,-147.5],[133.5,-147.5]]).appendPoint([133.5,-132.5]).appendPoint([118.5,-132.5]).appendPoint([118.5,-147.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[99.5,-69],[114.5,-69]]).appendPoint([114.5,-54]).appendPoint([99.5,-54]).appendPoint([99.5,-69]).close().innerToCAG()
).union(
    new CSG.Path2D([[99.5,-88],[114.5,-88]]).appendPoint([114.5,-73]).appendPoint([99.5,-73]).appendPoint([99.5,-88]).close().innerToCAG()
).union(
    new CSG.Path2D([[99.5,-107],[114.5,-107]]).appendPoint([114.5,-92]).appendPoint([99.5,-92]).appendPoint([99.5,-107]).close().innerToCAG()
).union(
    new CSG.Path2D([[99.5,-126],[114.5,-126]]).appendPoint([114.5,-111]).appendPoint([99.5,-111]).appendPoint([99.5,-126]).close().innerToCAG()
).union(
    new CSG.Path2D([[99.5,-145],[114.5,-145]]).appendPoint([114.5,-130]).appendPoint([99.5,-130]).appendPoint([99.5,-145]).close().innerToCAG()
).union(
    new CSG.Path2D([[80.5,-74],[95.5,-74]]).appendPoint([95.5,-59]).appendPoint([80.5,-59]).appendPoint([80.5,-74]).close().innerToCAG()
).union(
    new CSG.Path2D([[80.5,-93],[95.5,-93]]).appendPoint([95.5,-78]).appendPoint([80.5,-78]).appendPoint([80.5,-93]).close().innerToCAG()
).union(
    new CSG.Path2D([[80.5,-112],[95.5,-112]]).appendPoint([95.5,-97]).appendPoint([80.5,-97]).appendPoint([80.5,-112]).close().innerToCAG()
).union(
    new CSG.Path2D([[80.5,-131],[95.5,-131]]).appendPoint([95.5,-116]).appendPoint([80.5,-116]).appendPoint([80.5,-131]).close().innerToCAG()
).union(
    new CSG.Path2D([[80.5,-150],[95.5,-150]]).appendPoint([95.5,-135]).appendPoint([80.5,-135]).appendPoint([80.5,-150]).close().innerToCAG()
).union(
    new CSG.Path2D([[61.5,-76.5],[76.5,-76.5]]).appendPoint([76.5,-61.5]).appendPoint([61.5,-61.5]).appendPoint([61.5,-76.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[61.5,-95.5],[76.5,-95.5]]).appendPoint([76.5,-80.5]).appendPoint([61.5,-80.5]).appendPoint([61.5,-95.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[61.5,-114.5],[76.5,-114.5]]).appendPoint([76.5,-99.5]).appendPoint([61.5,-99.5]).appendPoint([61.5,-114.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[61.5,-133.5],[76.5,-133.5]]).appendPoint([76.5,-118.5]).appendPoint([61.5,-118.5]).appendPoint([61.5,-133.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[61.5,-152.5],[76.5,-152.5]]).appendPoint([76.5,-137.5]).appendPoint([61.5,-137.5]).appendPoint([61.5,-152.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[42.5,-81.5],[57.5,-81.5]]).appendPoint([57.5,-66.5]).appendPoint([42.5,-66.5]).appendPoint([42.5,-81.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[42.5,-100.5],[57.5,-100.5]]).appendPoint([57.5,-85.5]).appendPoint([42.5,-85.5]).appendPoint([42.5,-100.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[42.5,-119.5],[57.5,-119.5]]).appendPoint([57.5,-104.5]).appendPoint([42.5,-104.5]).appendPoint([42.5,-119.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[42.5,-138.5],[57.5,-138.5]]).appendPoint([57.5,-123.5]).appendPoint([42.5,-123.5]).appendPoint([42.5,-138.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[42.5,-157.5],[57.5,-157.5]]).appendPoint([57.5,-142.5]).appendPoint([42.5,-142.5]).appendPoint([42.5,-157.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[136.8748717,-159.8177922],[151.8177922,-161.1251283]]).appendPoint([153.1251283,-146.1822078]).appendPoint([138.1822078,-144.8748717]).appendPoint([136.8748717,-159.8177922]).close().innerToCAG()
).union(
    new CSG.Path2D([[161.5779282,-138.2632672],[176.5208487,-139.5706033]]).appendPoint([177.8281848,-124.6276828]).appendPoint([162.8852643,-123.3203467]).appendPoint([161.5779282,-138.2632672]).close().innerToCAG()
).union(
    new CSG.Path2D([[174.6707209,-167.6105887],[188.2653377,-173.9498627]]).appendPoint([194.6046117,-160.3552459]).appendPoint([181.0099949,-154.0159719]).appendPoint([174.6707209,-167.6105887]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1] });
}




                function plate_case_fn() {
                    

                // creating part 0 of case plate
                let plate__part_0 = plate_extrude_1_outline_fn();

                // make sure that rotations are relative
                let plate__part_0_bounds = plate__part_0.getBounds();
                let plate__part_0_x = plate__part_0_bounds[0].x + (plate__part_0_bounds[1].x - plate__part_0_bounds[0].x) / 2
                let plate__part_0_y = plate__part_0_bounds[0].y + (plate__part_0_bounds[1].y - plate__part_0_bounds[0].y) / 2
                plate__part_0 = translate([-plate__part_0_x, -plate__part_0_y, 0], plate__part_0);
                plate__part_0 = rotate([0,0,0], plate__part_0);
                plate__part_0 = translate([plate__part_0_x, plate__part_0_y, 0], plate__part_0);

                plate__part_0 = translate([0,0,0], plate__part_0);
                let result = plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate_case_fn();
            }

        