
        document.addEventListener('DOMContentLoaded', () => {
            // Scene setup
            const scene = new THREE.Scene();
            scene.background = new THREE.Color(0xdddddd);
            
            // Camera setup
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(5, 5, 5);
            
            // Renderer setup
            const renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.shadowMap.enabled = true;
            document.getElementById('container').appendChild(renderer.domElement);
            
            // Add orbit controls
            const controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.05;
            
            // Add lights
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            scene.add(ambientLight);
            
            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
            directionalLight.position.set(5, 10, 7);
            directionalLight.castShadow = true;
            scene.add(directionalLight);

            // Function to create an array of colorful cubes (MIDDLE)
            function createCubes() {
                const materials = [
                    new THREE.MeshLambertMaterial({ color: 0xff0000 }), // red
                    new THREE.MeshLambertMaterial({ color: 0x00ff00 }), // green
                    new THREE.MeshLambertMaterial({ color: 0x0000ff }), // blue
                    new THREE.MeshLambertMaterial({ color: 0xffff00 }), // yellow
                    new THREE.MeshLambertMaterial({ color: 0xff00ff }), // magenta
                    new THREE.MeshLambertMaterial({ color: 0x00ffff }), // cyan
                    new THREE.MeshLambertMaterial({ color: 0x000000 })  // black
                ];
                
                const size = 0.9;
                const group = new THREE.Group();
                const spacing = 1.2; // Space between cubes

                // Create a smaller grid of cubes (5x5x5)
                for(let i = -2; i <= 2; i++) {
                    for(let j = -2; j <= 2; j++) {
                        for(let k = -2; k <= 2; k++) {
                            const cubeGeometry = new THREE.BoxGeometry(size, size, size);
                            
                            // Create a mesh with random material
                            const cube = new THREE.Mesh(
                                cubeGeometry, 
                                materials[Math.floor(Math.random() * materials.length)]
                            );
                            
                            // Add edges for better visibility
                            const edges = new THREE.EdgesGeometry(cubeGeometry);
                            const line = new THREE.LineSegments(
                                edges, 
                                new THREE.LineBasicMaterial({ color: 0xffffff })
                            );
                            
                            cube.add(line);
                            cube.position.set(i * spacing, j * spacing, k * spacing);
                            group.add(cube);
                        }
                    }
                }
                return group;
            }

            const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
            const boxMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
            const drunkCube = new THREE.Mesh(boxGeometry, boxMaterial);
            scene.add(drunkCube); 

            const points = [
            new THREE.Vector3(-30, -4, -4),
                new THREE.Vector3(-24, -4, -4),
                new THREE.Vector3(-24, -4, -14),
                new THREE.Vector3(-18, -4, -14),
                new THREE.Vector3(-18, -4, -4),
                new THREE.Vector3(-12, -4, -4),
                new THREE.Vector3(-12, -4, -14),
                new THREE.Vector3(-6, -4, -14),
                new THREE.Vector3(-6, -4, -4),
                new THREE.Vector3(0, -4, -4),
                new THREE.Vector3(0, -4, -14),
                new THREE.Vector3(6, -4, -14),
                new THREE.Vector3(6, -4, -4),
                new THREE.Vector3(12, -4, -4),
                new THREE.Vector3(12, -4, -14),
                new THREE.Vector3(18, -4, -14),
                new THREE.Vector3(18, -4, -4),
                new THREE.Vector3(24, -4, -4),
                new THREE.Vector3(30, -4, -4),







            ];
            

            const path = new THREE.CatmullRomCurve3(points);
            const pathGeometry = new THREE.BufferGeometry().setFromPoints(path.getPoints(50));
            const pathObject = new THREE.Line(pathGeometry);
         

            /// second path and cube 


            const boxGeometry2 = new THREE.BoxGeometry(1, 1, 1);
            const boxMaterial2 = new THREE.MeshStandardMaterial({ color: 0xff0000 });
            const drunkCube2 = new THREE.Mesh(boxGeometry2, boxMaterial2);
            scene.add(drunkCube2);

            const points2 = [
            new THREE.Vector3(-30, -4, 4),
                new THREE.Vector3(-24, -4, 4),
                new THREE.Vector3(-24, -4, 14),
                new THREE.Vector3(-18, -4, 14),
                new THREE.Vector3(-18, -4, 4),
                new THREE.Vector3(-12, -4, 4),
                new THREE.Vector3(-12, -4, 14),
                new THREE.Vector3(-6, -4, 14),
                new THREE.Vector3(-6, -4, 4),
                new THREE.Vector3(0, -4, 4),
                new THREE.Vector3(0, -4, 14),
                new THREE.Vector3(6, -4, 14),
                new THREE.Vector3(6, -4, 4),
                new THREE.Vector3(12, -4, 4),
                new THREE.Vector3(12, -4, 14),
                new THREE.Vector3(18, -4, 14),
                new THREE.Vector3(18, -4, 4),
                new THREE.Vector3(24, -4, 4),
                new THREE.Vector3(30, -4, 4),
            ];

            const path2 = new THREE.CatmullRomCurve3(points2);
            const pathGeometry2 = new THREE.BufferGeometry().setFromPoints(path.getPoints(50));
            const pathObject2 = new THREE.Line(pathGeometry2);




            /// THRID BOX right HIGHER Z POSTION

            const boxGeometry3 = new THREE.BoxGeometry(1, 1, 1);
            const boxMaterial3 = new THREE.MeshStandardMaterial({ color: 0xff0000 });
            const drunkCube3 = new THREE.Mesh(boxGeometry3, boxMaterial3);
            scene.add(drunkCube3);

            const points3 = [
            
            new THREE.Vector3 (2, 0, -17), //1
                new THREE.Vector3 (5, 0, -17), //2
                new THREE.Vector3 (8, 0, -17), //3
                new THREE.Vector3 (8, 0, -14), //4
                new THREE.Vector3 (8, 0, -11), //5
                new THREE.Vector3 (5, 0, -11), //6
                new THREE.Vector3 (2, 0, -11), //7
                new THREE.Vector3 (2, 0, -8), //8
                new THREE.Vector3 (2, 0, -4), //9
                new THREE.Vector3 (2, 0, -1), //10
                new THREE.Vector3 (5, 0, -1), //11
                new THREE.Vector3 (8, 0, -1), //12
                new THREE.Vector3 (8, 0, -4), //13
                new THREE.Vector3 (8, 0, -7), //14
                new THREE.Vector3 (11, 0, -7), //15
                new THREE.Vector3 (14, 0, -7), //16
                new THREE.Vector3 (14, 0, -4), //17
                new THREE.Vector3 (14, 0, -1), //18
                new THREE.Vector3 (17, 0, -1), //19
                new THREE.Vector3 (20, 0, -1), //20
                new THREE.Vector3 (20, 0, -4), //21
                new THREE.Vector3 (20, 0, -8), //22
                new THREE.Vector3 (20, 0, -11), //23
                new THREE.Vector3 (14, 0, -11), //24
                new THREE.Vector3 (14, 0, -14), //25
                new THREE.Vector3 (14, 0, -17), //26
                new THREE.Vector3 (17, 0, -17), //27
                new THREE.Vector3 (21, 0, -17), //28
                new THREE.Vector3 (24, 0, -17), //29
                new THREE.Vector3 (24, 0, -14), //30
                new THREE.Vector3 (24, 0, -11), //31
                new THREE.Vector3 (27, 0, -11), //32
                new THREE.Vector3 (30, 0, -11), //33
                new THREE.Vector3 (30, 0, -8), //33.1
                new THREE.Vector3 (30, 0, -5), //34
                new THREE.Vector3 (27, 0, -5), //35
                new THREE.Vector3 (24, 0, -5), //36
                new THREE.Vector3 (24, 0, -4), //37
                new THREE.Vector3 (24, 0, -3), //38
                new THREE.Vector3 (24, 0, 4), //37
                new THREE.Vector3 (24, 0, 5), //36
                new THREE.Vector3 (27, 0, 5), //35
                new THREE.Vector3 (30, 0, 5), //34
                new THREE.Vector3 (30, 0, 8), //33.1
                new THREE.Vector3 (30, 0, 11), //33
                new THREE.Vector3 (27, 0, 11), //32
                new THREE.Vector3 (24, 0, 11), //31
                new THREE.Vector3 (24, 0, 14), //30
                new THREE.Vector3 (24, 0, 17), //29
                new THREE.Vector3 (21, 0, 17), //28
                new THREE.Vector3 (17, 0, 17), //27
                new THREE.Vector3 (14, 0, 17), //26
                new THREE.Vector3 (14, 0, 14), //25
                new THREE.Vector3 (14, 0, 11), //24
                new THREE.Vector3 (20, 0, 11), //23
                new THREE.Vector3 (20, 0, 8), //22
                new THREE.Vector3 (20, 0, 4), //21
                new THREE.Vector3 (20, 0, 1), //20
                new THREE.Vector3 (17, 0, 1), //19
                new THREE.Vector3 (14, 0, 1), //18
                new THREE.Vector3 (14, 0, 4), //17
                new THREE.Vector3 (14, 0, 7), //16
                new THREE.Vector3 (11, 0, 7), //15
                new THREE.Vector3 (8, 0, 7), //14
                new THREE.Vector3 (8, 0, 4), //13
                new THREE.Vector3 (8, 0, 1), //12
                new THREE.Vector3 (5, 0, 1), //11
                new THREE.Vector3 (2, 0, 1), //10
                new THREE.Vector3 (2, 0, 4), //9
                new THREE.Vector3 (2, 0, 8), //8
                new THREE.Vector3 (2, 0, 11), //7
                new THREE.Vector3 (5, 0, 11), //6
                new THREE.Vector3 (8, 0, 11), //5
                new THREE.Vector3 (8, 0, 14), //4
                new THREE.Vector3 (8, 0, 17), //3
                new THREE.Vector3 (5, 0, 17), //2
                new THREE.Vector3 (2, 0, -17), //1
        
            ];

            const path3 = new THREE.CatmullRomCurve3(points3.reverse());
            const pathGeometry3 = new THREE.BufferGeometry().setFromPoints(path.getPoints(50));
            const pathObject3 = new THREE.Line(pathGeometry2);


            // fourth box left side higher postion  

            const boxGeometry4 = new THREE.BoxGeometry(1, 1, 1);
            const boxMaterial4 = new THREE.MeshStandardMaterial({ color: 0xff0000 });
            const drunkCube4 = new THREE.Mesh(boxGeometry4, boxMaterial4);
            scene.add(drunkCube4);

            const points4 = [
            new THREE.Vector3 (2, 10, -17), //1
                new THREE.Vector3 (5, 10, -17), //2
                new THREE.Vector3 (8, 10, -17), //3
                new THREE.Vector3 (8, 10, -14), //4
                new THREE.Vector3 (8, 10, -11), //5
                new THREE.Vector3 (5, 10, -11), //6
                new THREE.Vector3 (2, 10, -11), //7
                new THREE.Vector3 (2, 10, -8), //8
                new THREE.Vector3 (2, 10, -4), //9
                new THREE.Vector3 (2, 10, -1), //10
                new THREE.Vector3 (5, 10, -1), //11
                new THREE.Vector3 (8, 10, -1), //12
                new THREE.Vector3 (8, 10, -4), //13
                new THREE.Vector3 (8, 10, -7), //14
                new THREE.Vector3 (11, 10, -7), //15
                new THREE.Vector3 (14, 10, -7), //16
                new THREE.Vector3 (14, 10, -4), //17
                new THREE.Vector3 (14, 10, -1), //18
                new THREE.Vector3 (17, 10, -1), //19
                new THREE.Vector3 (20, 10, -1), //20
                new THREE.Vector3 (20, 10, -4), //21
                new THREE.Vector3 (20, 10, -8), //22
                new THREE.Vector3 (20, 10, -11), //23
                new THREE.Vector3 (14, 10, -11), //24
                new THREE.Vector3 (14, 10, -14), //25
                new THREE.Vector3 (14, 10, -17), //26
                new THREE.Vector3 (17, 10, -17), //27
                new THREE.Vector3 (21, 10, -17), //28
                new THREE.Vector3 (24, 10, -17), //29
                new THREE.Vector3 (24, 10, -14), //30
                new THREE.Vector3 (24, 10, -11), //31
                new THREE.Vector3 (27, 10, -11), //32
                new THREE.Vector3 (30, 10, -11), //33
                new THREE.Vector3 (30, 10, -8), //33.1
                new THREE.Vector3 (30, 10, -5), //34
                new THREE.Vector3 (27, 10, -5), //35
                new THREE.Vector3 (24, 10, -5), //36
                new THREE.Vector3 (24, 10, -4), //37
                new THREE.Vector3 (24, 10, -3), //38
                new THREE.Vector3 (24, 10, 4), //37
                new THREE.Vector3 (24, 10, 5), //36
                new THREE.Vector3 (27, 10, 5), //35
                new THREE.Vector3 (30, 10, 5), //34
                new THREE.Vector3 (30, 10, 8), //33.1
                new THREE.Vector3 (30, 10, 11), //33
                new THREE.Vector3 (27, 10, 11), //32
                new THREE.Vector3 (24, 10, 11), //31
                new THREE.Vector3 (24, 10, 14), //30
                new THREE.Vector3 (24, 10, 17), //29
                new THREE.Vector3 (21, 10, 17), //28
                new THREE.Vector3 (17, 10, 17), //27
                new THREE.Vector3 (14, 10, 17), //26
                new THREE.Vector3 (14, 10, 14), //25
                new THREE.Vector3 (14, 10, 11), //24
                new THREE.Vector3 (20, 10, 11), //23
                new THREE.Vector3 (20, 10, 8), //22
                new THREE.Vector3 (20, 10, 4), //21
                new THREE.Vector3 (20, 10, 1), //20
                new THREE.Vector3 (17, 10, 1), //19
                new THREE.Vector3 (14, 10, 1), //18
                new THREE.Vector3 (14, 10, 4), //17
                new THREE.Vector3 (14, 10, 7), //16
                new THREE.Vector3 (11, 10, 7), //15
                new THREE.Vector3 (8, 10, 7), //14
                new THREE.Vector3 (8, 10, 4), //13
                new THREE.Vector3 (8, 10, 1), //12
                new THREE.Vector3 (5, 10, 1), //11
                new THREE.Vector3 (2, 10, 1), //10
                new THREE.Vector3 (2, 10, 4), //9
                new THREE.Vector3 (2, 10, 8), //8
                new THREE.Vector3 (2, 10, 11), //7
                new THREE.Vector3 (5, 10, 11), //6
                new THREE.Vector3 (8, 10, 11), //5
                new THREE.Vector3 (8, 10, 14), //4
                new THREE.Vector3 (8, 10, 17), //3
                new THREE.Vector3 (5, 10, 17), //2
                new THREE.Vector3 (2, 10, -17), //1 // top part of yxz map ^ bottoom part bellow

                new THREE.Vector3 (-2, 10, -17), //1
                new THREE.Vector3 (-5, 10, -17), //2
                new THREE.Vector3 (-8, 10, -17), //3
                new THREE.Vector3 (-8, 10, -14), //4
                new THREE.Vector3 (-8, 10, -11), //5
                new THREE.Vector3 (-5, 10, -11), //6
                new THREE.Vector3 (-2, 10, -11), //7
                new THREE.Vector3 (-2, 10, -8), //8
                new THREE.Vector3 (-2, 10, -4), //9
                new THREE.Vector3 (-2, 10, -1), //10
                new THREE.Vector3 (-5, 10, -1), //11
                new THREE.Vector3 (-8, 10, -1), //12
                new THREE.Vector3 (-8, 10, -4), //13
                new THREE.Vector3 (-8, 10, -7), //14
                new THREE.Vector3 (-11, 10, -7), //15
                new THREE.Vector3 (-14, 10, -7), //16
                new THREE.Vector3 (-14, 10, -4), //17
                new THREE.Vector3 (-14, 10, -1), //18
                new THREE.Vector3 (-17, 10, -1), //19
                new THREE.Vector3 (-20, 10, -1), //20
                new THREE.Vector3 (-20, 10, -4), //21
                new THREE.Vector3 (-20, 10, -8), //22
                new THREE.Vector3 (-20, 10, -11), //23
                new THREE.Vector3 (-14, 10, -11), //24
                new THREE.Vector3 (-14, 10, -14), //25
                new THREE.Vector3 (-14, 10, -17), //26
                new THREE.Vector3 (-17, 10, -17), //27
                new THREE.Vector3 (-21, 10, -17), //28
                new THREE.Vector3 (-24, 10, -17), //29
                new THREE.Vector3 (-24, 10, -14), //30
                new THREE.Vector3 (-24, 10, -11), //31
                new THREE.Vector3 (-27, 10, -11), //32
                new THREE.Vector3 (-30, 10, -11), //33
                new THREE.Vector3 (-30, 10, -8), //33.1
                new THREE.Vector3 (-30, 10, -5), //34
                new THREE.Vector3 (-27, 10, -5), //35
                new THREE.Vector3 (-24, 10, -5), //36
                new THREE.Vector3 (-24, 10, -4), //37
                new THREE.Vector3 (-24, 10, -3), //38
                new THREE.Vector3 (-24, 10, 4), //37
                new THREE.Vector3 (-24, 10, 5), //36
                new THREE.Vector3 (-27, 10, 5), //35
                new THREE.Vector3 (-30, 10, 5), //34
                new THREE.Vector3 (-30, 10, 8), //33.1
                new THREE.Vector3 (-30, 10, 11), //33
                new THREE.Vector3 (-27, 10, 11), //32
                new THREE.Vector3 (-24, 10, 11), //31
                new THREE.Vector3 (-24, 10, 14), //30
                new THREE.Vector3 (-24, 10, 17), //29
                new THREE.Vector3 (-21, 10, 17), //28
                new THREE.Vector3 (-17, 10, 17), //27
                new THREE.Vector3 (-14, 10, 17), //26
                new THREE.Vector3 (-14, 10, 14), //25
                new THREE.Vector3 (-14, 10, 11), //24
                new THREE.Vector3 (-20, 10, 11), //23
                new THREE.Vector3 (-20, 10, 8), //22
                new THREE.Vector3 (-20, 10, 4), //21
                new THREE.Vector3 (-20, 10, 1), //20
                new THREE.Vector3 (-17, 10, 1), //19
                new THREE.Vector3 (-14, 10, 1), //18
                new THREE.Vector3 (-14, 10, 4), //17
                new THREE.Vector3 (-14, 10, 7), //16
                new THREE.Vector3 (-11, 10, 7), //15
                new THREE.Vector3 (-8, 10, 7), //14
                new THREE.Vector3 (-8, 10, 4), //13
                new THREE.Vector3 (-8, 10, 1), //12
                new THREE.Vector3 (-5, 10, 1), //11
                new THREE.Vector3 (-2, 10, 1), //10
                new THREE.Vector3 (-2, 10, 4), //9
                new THREE.Vector3 (-2, 10, 8), //8
                new THREE.Vector3 (-2, 10, 11), //7
                new THREE.Vector3 (-5, 10, 11), //6
                new THREE.Vector3 (-8, 10, 11), //5
                new THREE.Vector3 (-8, 10, 14), //4
                new THREE.Vector3 (-8, 10, 17), //3
                new THREE.Vector3 (-5, 10, 17), //2
                new THREE.Vector3 (-2, 10, -17), //1

            
            ];

            const path4 = new THREE.CatmullRomCurve3(points4);
            const pathGeometry4 = new THREE.BufferGeometry().setFromPoints(path.getPoints(50));
            const pathObject4 = new THREE.Line(pathGeometry4);

            //// path , box and points 5

            const boxGeometry5 = new THREE.BoxGeometry(1, 1, 1);
            const boxMaterial5 = new THREE.MeshStandardMaterial({ color: 0xff0000 });
            const drunkCube5 = new THREE.Mesh(boxGeometry5, boxMaterial5);
            scene.add(drunkCube5);

            const points5 = [
            new THREE.Vector3 (-2, 10, -17), //1
                new THREE.Vector3 (-5, 10, -17), //2
                new THREE.Vector3 (-8, 10, -17), //3
                new THREE.Vector3 (-8, 10, -14), //4
                new THREE.Vector3 (-8, 10, -11), //5
                new THREE.Vector3 (-5, 10, -11), //6
                new THREE.Vector3 (-2, 10, -11), //7
                new THREE.Vector3 (-2, 10, -8), //8
                new THREE.Vector3 (-2, 10, -4), //9
                new THREE.Vector3 (-2, 10, -1), //10
                new THREE.Vector3 (-5, 10, -1), //11
                new THREE.Vector3 (-8, 10, -1), //12
                new THREE.Vector3 (-8, 10, -4), //13
                new THREE.Vector3 (-8, 10, -7), //14
                new THREE.Vector3 (-11, 10, -7), //15
                new THREE.Vector3 (-14, 10, -7), //16
                new THREE.Vector3 (-14, 10, -4), //17
                new THREE.Vector3 (-14, 10, -1), //18
                new THREE.Vector3 (-17, 10, -1), //19
                new THREE.Vector3 (-20, 10, -1), //20
                new THREE.Vector3 (-20, 10, -4), //21
                new THREE.Vector3 (-20, 10, -8), //22
                new THREE.Vector3 (-20, 10, -11), //23
                new THREE.Vector3 (-14, 10, -11), //24
                new THREE.Vector3 (-14, 10, -14), //25
                new THREE.Vector3 (-14, 10, -17), //26
                new THREE.Vector3 (-17, 10, -17), //27
                new THREE.Vector3 (-21, 10, -17), //28
                new THREE.Vector3 (-24, 10, -17), //29
                new THREE.Vector3 (-24, 10, -14), //30
                new THREE.Vector3 (-24, 10, -11), //31
                new THREE.Vector3 (-27, 10, -11), //32
                new THREE.Vector3 (-30, 10, -11), //33
                new THREE.Vector3 (-30, 10, -8), //33.1
                new THREE.Vector3 (-30, 10, -5), //34
                new THREE.Vector3 (-27, 10, -5), //35
                new THREE.Vector3 (-24, 10, -5), //36
                new THREE.Vector3 (-24, 10, -4), //37
                new THREE.Vector3 (-24, 10, -3), //38
                new THREE.Vector3 (-24, 10, 4), //37
                new THREE.Vector3 (-24, 10, 5), //36
                new THREE.Vector3 (-27, 10, 5), //35
                new THREE.Vector3 (-30, 10, 5), //34
                new THREE.Vector3 (-30, 10, 8), //33.1
                new THREE.Vector3 (-30, 10, 11), //33
                new THREE.Vector3 (-27, 10, 11), //32
                new THREE.Vector3 (-24, 10, 11), //31
                new THREE.Vector3 (-24, 10, 14), //30
                new THREE.Vector3 (-24, 10, 17), //29
                new THREE.Vector3 (-21, 10, 17), //28
                new THREE.Vector3 (-17, 10, 17), //27
                new THREE.Vector3 (-14, 10, 17), //26
                new THREE.Vector3 (-14, 10, 14), //25
                new THREE.Vector3 (-14, 10, 11), //24
                new THREE.Vector3 (-20, 10, 11), //23
                new THREE.Vector3 (-20, 10, 8), //22
                new THREE.Vector3 (-20, 10, 4), //21
                new THREE.Vector3 (-20, 10, 1), //20
                new THREE.Vector3 (-17, 10, 1), //19
                new THREE.Vector3 (-14, 10, 1), //18
                new THREE.Vector3 (-14, 10, 4), //17
                new THREE.Vector3 (-14, 10, 7), //16
                new THREE.Vector3 (-11, 10, 7), //15
                new THREE.Vector3 (-8, 10, 7), //14
                new THREE.Vector3 (-8, 10, 4), //13
                new THREE.Vector3 (-8, 10, 1), //12
                new THREE.Vector3 (-5, 10, 1), //11
                new THREE.Vector3 (-2, 10, 1), //10
                new THREE.Vector3 (-2, 10, 4), //9
                new THREE.Vector3 (-2, 10, 8), //8
                new THREE.Vector3 (-2, 10, 11), //7
                new THREE.Vector3 (-5, 10, 11), //6
                new THREE.Vector3 (-8, 10, 11), //5
                new THREE.Vector3 (-8, 10, 14), //4
                new THREE.Vector3 (-8, 10, 17), //3
                new THREE.Vector3 (-5, 10, 17), //2
                new THREE.Vector3 (-2, 10, -17), //1


                new THREE.Vector3 (2, 10, -17), //1
                new THREE.Vector3 (5, 10, -17), //2
                new THREE.Vector3 (8, 10, -17), //3
                new THREE.Vector3 (8, 10, -14), //4
                new THREE.Vector3 (8, 10, -11), //5
                new THREE.Vector3 (5, 10, -11), //6
                new THREE.Vector3 (2, 10, -11), //7
                new THREE.Vector3 (2, 10, -8), //8
                new THREE.Vector3 (2, 10, -4), //9
                new THREE.Vector3 (2, 10, -1), //10
                new THREE.Vector3 (5, 10, -1), //11
                new THREE.Vector3 (8, 10, -1), //12
                new THREE.Vector3 (8, 10, -4), //13
                new THREE.Vector3 (8, 10, -7), //14
                new THREE.Vector3 (11, 10, -7), //15
                new THREE.Vector3 (14, 10, -7), //16
                new THREE.Vector3 (14, 10, -4), //17
                new THREE.Vector3 (14, 10, -1), //18
                new THREE.Vector3 (17, 10, -1), //19
                new THREE.Vector3 (20, 10, -1), //20
                new THREE.Vector3 (20, 10, -4), //21
                new THREE.Vector3 (20, 10, -8), //22
                new THREE.Vector3 (20, 10, -11), //23
                new THREE.Vector3 (14, 10, -11), //24
                new THREE.Vector3 (14, 10, -14), //25
                new THREE.Vector3 (14, 10, -17), //26
                new THREE.Vector3 (17, 10, -17), //27
                new THREE.Vector3 (21, 10, -17), //28
                new THREE.Vector3 (24, 10, -17), //29
                new THREE.Vector3 (24, 10, -14), //30
                new THREE.Vector3 (24, 10, -11), //31
                new THREE.Vector3 (27, 10, -11), //32
                new THREE.Vector3 (30, 10, -11), //33
                new THREE.Vector3 (30, 10, -8), //33.1
                new THREE.Vector3 (30, 10, -5), //34
                new THREE.Vector3 (27, 10, -5), //35
                new THREE.Vector3 (24, 10, -5), //36
                new THREE.Vector3 (24, 10, -4), //37
                new THREE.Vector3 (24, 10, -3), //38
                new THREE.Vector3 (24, 10, 4), //37
                new THREE.Vector3 (24, 10, 5), //36
                new THREE.Vector3 (27, 10, 5), //35
                new THREE.Vector3 (30, 10, 5), //34
                new THREE.Vector3 (30, 10, 8), //33.1
                new THREE.Vector3 (30, 10, 11), //33
                new THREE.Vector3 (27, 10, 11), //32
                new THREE.Vector3 (24, 10, 11), //31
                new THREE.Vector3 (24, 10, 14), //30
                new THREE.Vector3 (24, 10, 17), //29
                new THREE.Vector3 (21, 10, 17), //28
                new THREE.Vector3 (17, 10, 17), //27
                new THREE.Vector3 (14, 10, 17), //26
                new THREE.Vector3 (14, 10, 14), //25
                new THREE.Vector3 (14, 10, 11), //24
                new THREE.Vector3 (20, 10, 11), //23
                new THREE.Vector3 (20, 10, 8), //22
                new THREE.Vector3 (20, 10, 4), //21
                new THREE.Vector3 (20, 10, 1), //20
                new THREE.Vector3 (17, 10, 1), //19
                new THREE.Vector3 (14, 10, 1), //18
                new THREE.Vector3 (14, 10, 4), //17
                new THREE.Vector3 (14, 10, 7), //16
                new THREE.Vector3 (11, 10, 7), //15
                new THREE.Vector3 (8, 10, 7), //14
                new THREE.Vector3 (8, 10, 4), //13
                new THREE.Vector3 (8, 10, 1), //12
                new THREE.Vector3 (5, 10, 1), //11
                new THREE.Vector3 (2, 10, 1), //10
                new THREE.Vector3 (2, 10, 4), //9
                new THREE.Vector3 (2, 10, 8), //8
                new THREE.Vector3 (2, 10, 11), //7
                new THREE.Vector3 (5, 10, 11), //6
                new THREE.Vector3 (8, 10, 11), //5
                new THREE.Vector3 (8, 10, 14), //4
                new THREE.Vector3 (8, 10, 17), //3
                new THREE.Vector3 (5, 10, 17), //2
                new THREE.Vector3 (2, 10, 17), //1 // top part of yxz map ^ bottoom part bellow

              
                


                
            ];

            const path5 = new THREE.CatmullRomCurve3(points5.reverse());
            const pathGeometry5 = new THREE.BufferGeometry().setFromPoints(path.getPoints(50));
            const pathObject5 = new THREE.Line(pathGeometry5);

            // Add cubes to the scene
            scene.add(createCubes());
            
            // Load GLTF model
            const loader = new THREE.GLTFLoader();
            const modelUrl = 'cubes3.glb';
            
            loader.load(
                modelUrl,
                (gltf) => {
                    const model = gltf.scene;
                    scene.add(model);
                    
                    // Center the model
                    const box = new THREE.Box3().setFromObject(model);
                    const center = box.getCenter(new THREE.Vector3());
                    model.position.x += (model.position.x - center.x);
                    model.position.y += (model.position.y - center.y);
                    model.position.z += (model.position.z - center.z);
                    
                    // Hide loading message
                    document.getElementById('loading').style.display = 'none';
                },
                (xhr) => {
                    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
                },
                (error) => {
                    console.error('Error loading model', error);
                    document.getElementById('loading').textContent = 'Error loading model';
                }
            );

            // Handle window resize
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
            
            // Animation loop
            function animate() {


                requestAnimationFrame(animate);
                const time = Date.now(); 
                const t = (time / 2000 % 6) / 6;

                //path and box 1
                const position = path.getPointAt(t); 
                drunkCube.position.copy(position);

                //path and box 2
                const position2 = path2.getPointAt(t); 
                drunkCube2.position.copy(position2);

                 //path and box 3
                 const position3 = path3.getPointAt(t); 
                drunkCube3.position.copy(position3);

                   //path and box 4
                   const position4 = path4.getPointAt(t); 
                drunkCube4.position.copy(position4);

                //path and box 4
                const position5 = path5.getPointAt(t); 
                drunkCube5.position.copy(position5);



                controls.update();
                renderer.render(scene, camera);
            }
            animate();
        });
