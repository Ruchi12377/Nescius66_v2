function standoff_extrude_4_outline_fn(){
    return CAG.circle({"center":[173.3535225,-163.910896],"radius":2.5})
.union(
    CAG.circle({"center":[59.5,-154.75],"radius":2.5})
).union(
    CAG.circle({"center":[154.5,-78.5],"radius":2.5})
).union(
    CAG.circle({"center":[59.5,-78.5],"radius":2.5})
).extrude({ offset: [0, 0, 4] });
}


function mounting_extrude_4_outline_fn(){
    return CAG.circle({"center":[173.3535225,-163.910896],"radius":1.5})
.union(
    CAG.circle({"center":[59.5,-154.75],"radius":1.5})
).union(
    CAG.circle({"center":[154.5,-78.5],"radius":1.5})
).union(
    CAG.circle({"center":[59.5,-78.5],"radius":1.5})
).extrude({ offset: [0, 0, 4] });
}


function board_extrude_1_outline_fn(){
    return new CSG.Path2D([[156.5,-65.3],[156.5,-59.0417772]]).appendArc([155.0089866,-57.1076281],{"radius":2,"clockwise":false,"large":false}).appendPoint([137.6224946,-52.5322354]).appendArc([137.374417,-52.4834759],{"radius":2,"clockwise":false,"large":false}).appendPoint([118.6298946,-50.0170914]).appendArc([118.3689856,-50],{"radius":2,"clockwise":false,"large":false}).appendPoint([95.7587532,-50]).appendArc([95.2497666,-50.0658509],{"radius":2,"clockwise":false,"large":false}).appendPoint([76.6224946,-54.9677646]).appendArc([76.374417,-55.0165241],{"radius":2,"clockwise":true,"large":false}).appendPoint([57.625583,-57.4834759]).appendArc([57.3775054,-57.5322354],{"radius":2,"clockwise":false,"large":false}).appendPoint([39.9910134,-62.1076281]).appendArc([38.5,-64.0417772],{"radius":2,"clockwise":false,"large":false}).appendPoint([38.5,-159.5]).appendArc([40.5,-161.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([61.2412468,-161.5]).appendArc([61.7502334,-161.4341491],{"radius":2,"clockwise":false,"large":false}).appendPoint([80.3775054,-156.5322354]).appendArc([80.625583,-156.4834759],{"radius":2,"clockwise":true,"large":false}).appendPoint([99.4659701,-154.0044776]).appendArc([99.5338591,-153.9943568],{"radius":2,"clockwise":false,"large":false}).appendPoint([114.3367268,-151.5272122]).appendArc([114.6655248,-151.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([124.8145745,-151.5]).appendArc([126.5690601,-152.539906],{"radius":2,"clockwise":true,"large":false}).appendPoint([132.0276259,-162.5149443]).appendArc([133.6078001,-163.5472398],{"radius":2,"clockwise":false,"large":false}).appendPoint([155.2553803,-165.4411577]).appendArc([155.6451813,-165.5147513],{"radius":2,"clockwise":true,"large":false}).appendPoint([169.2104545,-169.5028465]).appendArc([169.4915787,-169.6090268],{"radius":2,"clockwise":true,"large":false}).appendPoint([188.3874802,-178.4203303]).appendArc([191.0453323,-177.4529514],{"radius":2,"clockwise":false,"large":false}).appendPoint([199.244317,-159.8701722]).appendArc([198.6546482,-157.4424056],{"radius":2,"clockwise":false,"large":false}).appendPoint([182.6080424,-145.0419157]).appendArc([181.8309894,-143.4601995],{"radius":2,"clockwise":true,"large":false}).appendPoint([181.8008135,-69.2991862]).appendArc([179.8008137,-67.3],{"radius":2,"clockwise":false,"large":false}).appendPoint([158.5,-67.3]).appendArc([156.5,-65.3],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function _standoffs_case_fn() {
                    

                // creating part 0 of case _standoffs
                let _standoffs__part_0 = standoff_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _standoffs__part_0_bounds = _standoffs__part_0.getBounds();
                let _standoffs__part_0_x = _standoffs__part_0_bounds[0].x + (_standoffs__part_0_bounds[1].x - _standoffs__part_0_bounds[0].x) / 2
                let _standoffs__part_0_y = _standoffs__part_0_bounds[0].y + (_standoffs__part_0_bounds[1].y - _standoffs__part_0_bounds[0].y) / 2
                _standoffs__part_0 = translate([-_standoffs__part_0_x, -_standoffs__part_0_y, 0], _standoffs__part_0);
                _standoffs__part_0 = rotate([0,0,0], _standoffs__part_0);
                _standoffs__part_0 = translate([_standoffs__part_0_x, _standoffs__part_0_y, 0], _standoffs__part_0);

                _standoffs__part_0 = translate([0,0,0], _standoffs__part_0);
                let result = _standoffs__part_0;
                
            
                    return result;
                }
            
            

                function _holes_case_fn() {
                    

                // creating part 0 of case _holes
                let _holes__part_0 = mounting_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _holes__part_0_bounds = _holes__part_0.getBounds();
                let _holes__part_0_x = _holes__part_0_bounds[0].x + (_holes__part_0_bounds[1].x - _holes__part_0_bounds[0].x) / 2
                let _holes__part_0_y = _holes__part_0_bounds[0].y + (_holes__part_0_bounds[1].y - _holes__part_0_bounds[0].y) / 2
                _holes__part_0 = translate([-_holes__part_0_x, -_holes__part_0_y, 0], _holes__part_0);
                _holes__part_0 = rotate([0,0,0], _holes__part_0);
                _holes__part_0 = translate([_holes__part_0_x, _holes__part_0_y, 0], _holes__part_0);

                _holes__part_0 = translate([0,0,0], _holes__part_0);
                let result = _holes__part_0;
                
            
                    return result;
                }
            
            

                function _bottom_case_fn() {
                    

                // creating part 0 of case _bottom
                let _bottom__part_0 = board_extrude_1_outline_fn();

                // make sure that rotations are relative
                let _bottom__part_0_bounds = _bottom__part_0.getBounds();
                let _bottom__part_0_x = _bottom__part_0_bounds[0].x + (_bottom__part_0_bounds[1].x - _bottom__part_0_bounds[0].x) / 2
                let _bottom__part_0_y = _bottom__part_0_bounds[0].y + (_bottom__part_0_bounds[1].y - _bottom__part_0_bounds[0].y) / 2
                _bottom__part_0 = translate([-_bottom__part_0_x, -_bottom__part_0_y, 0], _bottom__part_0);
                _bottom__part_0 = rotate([0,0,0], _bottom__part_0);
                _bottom__part_0 = translate([_bottom__part_0_x, _bottom__part_0_y, 0], _bottom__part_0);

                _bottom__part_0 = translate([0,0,0], _bottom__part_0);
                let result = _bottom__part_0;
                
            
                    return result;
                }
            
            

                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = _standoffs_case_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            

                // creating part 1 of case case
                let case__part_1 = _holes_case_fn();

                // make sure that rotations are relative
                let case__part_1_bounds = case__part_1.getBounds();
                let case__part_1_x = case__part_1_bounds[0].x + (case__part_1_bounds[1].x - case__part_1_bounds[0].x) / 2
                let case__part_1_y = case__part_1_bounds[0].y + (case__part_1_bounds[1].y - case__part_1_bounds[0].y) / 2
                case__part_1 = translate([-case__part_1_x, -case__part_1_y, 0], case__part_1);
                case__part_1 = rotate([0,0,0], case__part_1);
                case__part_1 = translate([case__part_1_x, case__part_1_y, 0], case__part_1);

                case__part_1 = translate([0,0,0], case__part_1);
                result = result.subtract(case__part_1);
                
            

                // creating part 2 of case case
                let case__part_2 = _bottom_case_fn();

                // make sure that rotations are relative
                let case__part_2_bounds = case__part_2.getBounds();
                let case__part_2_x = case__part_2_bounds[0].x + (case__part_2_bounds[1].x - case__part_2_bounds[0].x) / 2
                let case__part_2_y = case__part_2_bounds[0].y + (case__part_2_bounds[1].y - case__part_2_bounds[0].y) / 2
                case__part_2 = translate([-case__part_2_x, -case__part_2_y, 0], case__part_2);
                case__part_2 = rotate([0,0,0], case__part_2);
                case__part_2 = translate([case__part_2_x, case__part_2_y, 0], case__part_2);

                case__part_2 = translate([0,0,0], case__part_2);
                result = result.union(case__part_2);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        