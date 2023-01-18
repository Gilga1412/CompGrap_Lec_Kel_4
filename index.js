import * as THREE from "./three.js/build/three.module.js"
import { OrbitControls } from "./three.js/examples/jsm/controls/OrbitControls.js"
import { GLTFLoader } from "./three.js/examples/jsm/loaders/GLTFLoader.js"

let canvas, cam, rendering, control

var init = () => {
    canvas = new THREE.Scene()

    const FOV = 45
    const ASPECT = window.innerWidth / window.innerHeight
    const NEAR = 1
    const FAR = 1000
    cam = new THREE.PerspectiveCamera(FOV, ASPECT, NEAR, FAR)
    cam.position.set(0, 75, 200)

    cam.lookAt(0, 0, 0)

    rendering = new THREE.WebGLRenderer()
    rendering.setSize(window.innerWidth, window.innerHeight)
    rendering.setClearColor("skyBlue")

    document.body.appendChild(rendering.domElement)
    control = new OrbitControls(cam, rendering.domElement)

    rendering.shadowMap.enabled = true

    createBigBomb()
    pointLight()
    makeFloor()
    createAmbientLight()
    mario("./assets/scene.gltf")
    three1()
    three2()
    pipe1()
    pipe2()
    boxLong1()
    boxLong2()
    boxQuest()
    SkyBox()
}

//musuh besar
var createBigBomb = () => {
    var createHead = () => {
        let geometry, material
        let rad = 30
        let w = 128
        let h = 64
        geometry = new THREE.SphereGeometry(rad, w, h)
        material = new THREE.MeshLambertMaterial({
            color: "black",
        })
        let meshBall = new THREE.Mesh(geometry, material)
        meshBall.castShadow = true
        meshBall.position.y = 50
        canvas.add(meshBall)
    }
    createHead()

    var createEye1 = () => {
        let geometry, material
        geometry = new THREE.BoxGeometry(4, 6, 5)
        material = new THREE.MeshPhongMaterial({
            color: "white",
        })
        let eye1Mesh = new THREE.Mesh(geometry, material)
        eye1Mesh.castShadow = true
        eye1Mesh.position.set(10, 60, 26)
        canvas.add(eye1Mesh)
    }
    createEye1()

    var createEye2 = () => {
        let geometry, material
        geometry = new THREE.BoxGeometry(4, 6, 5)
        material = new THREE.MeshLambertMaterial({
            color: "white",
        })
        let eye2Mesh = new THREE.Mesh(geometry, material)
        eye2Mesh.castShadow = true
        eye2Mesh.position.set(-10, 60, 26)
        canvas.add(eye2Mesh)
    }
    createEye2()

    var beards = () => {
        let geometry, material
        let radius = 7
        let height = 30
        let radialSeq = 3
        let heightSeq = 1
        geometry = new THREE.ConeGeometry(radius, height, radialSeq, heightSeq)
        material = new THREE.MeshLambertMaterial({
            color: "white",
        })

        let mesh = new THREE.Mesh(geometry, material)
        mesh.castShadow = true
        mesh.position.set(-15, 50, 30)
        mesh.rotation.set(25, 0, -90)
        canvas.add(mesh)
    }

    beards()

    var beards2 = () => {
        let geometry, material
        let radius = 7
        let height = 30
        let radialSeq = 3
        let heightSeq = 1
        geometry = new THREE.ConeGeometry(radius, height, radialSeq, heightSeq)
        material = new THREE.MeshLambertMaterial({
            color: "white",
        })

        let mesh = new THREE.Mesh(geometry, material)
        mesh.castShadow = true
        mesh.position.set(15, 50, 30)
        mesh.rotation.set(25, 0, 90)
        canvas.add(mesh)
    }

    beards2()

    var leftArm = () => {
        let geometry, material
        let rad = 4.5
        let w = 32
        let h = 32
        geometry = new THREE.SphereGeometry(rad, w, h)
        material = new THREE.MeshLambertMaterial({
            color: "#0400e4",
        })
        let meshLeftArm = new THREE.Mesh(geometry, material)
        meshLeftArm.castShadow = true
        meshLeftArm.position.y = 50
        meshLeftArm.position.x = -32
        canvas.add(meshLeftArm)
    }
    leftArm()

    var leftHand = () => {
        let geometry, material
        let rad = 8
        let w = 128
        let h = 32
        geometry = new THREE.SphereGeometry(rad, w, h)
        material = new THREE.MeshLambertMaterial({
            color: "#f6cd03",
        })
        let meshLeftHand = new THREE.Mesh(geometry, material)
        meshLeftHand.castShadow = true
        meshLeftHand.position.y = 43
        meshLeftHand.position.x = -42

        canvas.add(meshLeftHand)
    }
    leftHand()

    var rightArm = () => {
        let geometry, material
        let rad = 4.5
        let w = 32
        let h = 32
        geometry = new THREE.SphereGeometry(rad, w, h)
        material = new THREE.MeshLambertMaterial({
            color: "#0400e4",
        })
        let meshRightArm = new THREE.Mesh(geometry, material)
        meshRightArm.castShadow = true
        meshRightArm.position.y = 50
        meshRightArm.position.x = 32

        canvas.add(meshRightArm)
    }
    rightArm()

    var rightHand = () => {
        let geometry, material
        let rad = 8
        let w = 128
        let h = 32
        geometry = new THREE.SphereGeometry(rad, w, h)
        material = new THREE.MeshLambertMaterial({
            color: "#f6cd03",
        })
        let meshRightHand = new THREE.Mesh(geometry, material)
        meshRightHand.castShadow = true
        meshRightHand.position.y = 43
        meshRightHand.position.x = 42

        canvas.add(meshRightHand)
    }
    rightHand()

    var leftKnee = () => {
        let geometry, material
        let rad = 5
        let w = 32
        let h = 32
        geometry = new THREE.SphereGeometry(rad, w, h)
        material = new THREE.MeshLambertMaterial({
            color: "#0400e4",
        })
        let meshLeftKnee = new THREE.Mesh(geometry, material)
        meshLeftKnee.castShadow = true
        meshLeftKnee.position.y = 25.5
        meshLeftKnee.position.x = -20

        canvas.add(meshLeftKnee)
    }
    leftKnee()

    var rightKnee = () => {
        let geometry, material
        let rad = 5
        let w = 32
        let h = 32
        geometry = new THREE.SphereGeometry(rad, w, h)
        material = new THREE.MeshLambertMaterial({
            color: "#0400e4",
        })
        let meshRightKnee = new THREE.Mesh(geometry, material)
        meshRightKnee.castShadow = true
        meshRightKnee.receiveShadow = true
        meshRightKnee.position.y = 25.5
        meshRightKnee.position.x = 20

        canvas.add(meshRightKnee)
    }
    rightKnee()

    var rightFoot = () => {
        let geometry, material
        let rad = 11
        let w = 32
        let h = 32
        geometry = new THREE.SphereGeometry(rad, w, h, 3, 3)
        material = new THREE.MeshLambertMaterial({
            color: "#f6cd03",
        })
        let meshRightFoot = new THREE.Mesh(geometry, material)
        meshRightFoot.castShadow = true
        meshRightFoot.position.y = 9
        meshRightFoot.position.x = 24
        meshRightFoot.rotation.x = 2
        canvas.add(meshRightFoot)
    }
    rightFoot()

    var leftFoot = () => {
        let geometry, material
        let rad = 11
        let w = 32
        let h = 32
        geometry = new THREE.SphereGeometry(rad, w, h, 3, 3)
        material = new THREE.MeshLambertMaterial({
            color: "#f6cd03",
        })
        let meshLeftFoot = new THREE.Mesh(geometry, material)
        meshLeftFoot.castShadow = true
        meshLeftFoot.position.y = 9
        meshLeftFoot.position.x = -24
        meshLeftFoot.rotation.x = 2
        canvas.add(meshLeftFoot)
    }
    leftFoot()
}

//mario
let mario = (url) => {
    let load = new GLTFLoader()
    load.load(url, (gltf) => {
        let object = gltf.scene
        object.position.set(7, 15, 65)
        object.receiveShadow = true
        object.castShadow = true
        object.rotation.y = 16
        object.scale.set(3, 3, 3)
        object.castShadow = true

        canvas.add(object)
    })
}

//pohon pertama
let three1 = () => {
    let trunk = () => {
        let geometry, material
        let rad = 3
        let w = 32
        let h = 30
        geometry = new THREE.CylinderGeometry(rad, rad, h, 36, 1)
        material = new THREE.MeshLambertMaterial({
            color: "#e0a44a",
        })
        let meshTrunk = new THREE.Mesh(geometry, material)
        meshTrunk.castShadow = true
        meshTrunk.position.y = 24
        meshTrunk.position.x = 70
        meshTrunk.position.z = 70

        canvas.add(meshTrunk)
    }
    trunk()

    let leaf = () => {
        let geometry, material
        let rad = 9
        let w = 32
        let h = 32
        geometry = new THREE.SphereGeometry(rad, w, h)
        material = new THREE.MeshLambertMaterial({
            color: "#32b838",
        })
        let meshLeaf = new THREE.Mesh(geometry, material)
        meshLeaf.castShadow = true
        meshLeaf.position.y = 40
        meshLeaf.position.x = 70
        meshLeaf.position.z = 70

        canvas.add(meshLeaf)
    }
    leaf()

    let leaf2 = () => {
        let geometry, material
        let rad = 11
        let w = 32
        let h = 32
        geometry = new THREE.SphereGeometry(rad, w, h)
        material = new THREE.MeshLambertMaterial({
            color: "#32b838",
        })
        let meshLeaf = new THREE.Mesh(geometry, material)
        meshLeaf.castShadow = true
        meshLeaf.position.y = 50
        meshLeaf.position.x = 75
        meshLeaf.position.z = 70

        canvas.add(meshLeaf)
    }
    leaf2()

    let leaf3 = () => {
        let geometry, material
        let rad = 11
        let w = 32
        let h = 32
        geometry = new THREE.SphereGeometry(rad, w, h)
        material = new THREE.MeshLambertMaterial({
            color: "#32b838",
        })
        let meshLeaf = new THREE.Mesh(geometry, material)
        meshLeaf.castShadow = true
        meshLeaf.position.y = 50
        meshLeaf.position.x = 62
        meshLeaf.position.z = 70

        canvas.add(meshLeaf)
    }
    leaf3()

    let leaf4 = () => {
        let geometry, material
        let rad = 10
        let w = 32
        let h = 32
        geometry = new THREE.SphereGeometry(rad, w, h)
        material = new THREE.MeshLambertMaterial({
            color: "#32b838",
        })
        let meshLeaf = new THREE.Mesh(geometry, material)
        meshLeaf.castShadow = true
        meshLeaf.position.y = 65
        meshLeaf.position.x = 70
        meshLeaf.position.z = 70

        canvas.add(meshLeaf)
    }
    leaf4()
}

//pohon kedua
let three2 = () => {
    let trunk = () => {
        let geometry, material
        let rad = 3
        let w = 32
        let h = 30
        geometry = new THREE.CylinderGeometry(rad, rad, h, 36, 1)
        material = new THREE.MeshLambertMaterial({
            color: "#e0a44a",
        })
        let meshTrunk = new THREE.Mesh(geometry, material)
        meshTrunk.castShadow = true
        meshTrunk.position.y = 24
        meshTrunk.position.x = -70
        meshTrunk.position.z = -70

        canvas.add(meshTrunk)
    }
    trunk()

    let leaf = () => {
        let geometry, material
        let rad = 9
        let w = 32
        let h = 32
        geometry = new THREE.SphereGeometry(rad, w, h)
        material = new THREE.MeshLambertMaterial({
            color: "#32b838",
        })
        let meshLeaf = new THREE.Mesh(geometry, material)
        meshLeaf.castShadow = true
        meshLeaf.position.y = 40
        meshLeaf.position.x = -70
        meshLeaf.position.z = -70

        canvas.add(meshLeaf)
    }
    leaf()

    let leaf2 = () => {
        let geometry, material
        let rad = 11
        let w = 32
        let h = 32
        geometry = new THREE.SphereGeometry(rad, w, h)
        material = new THREE.MeshLambertMaterial({
            color: "#32b838",
        })
        let meshLeaf = new THREE.Mesh(geometry, material)
        meshLeaf.castShadow = true
        meshLeaf.position.y = 50
        meshLeaf.position.x = -75
        meshLeaf.position.z = -70

        canvas.add(meshLeaf)
    }
    leaf2()

    let leaf3 = () => {
        let geometry, material
        let rad = 11
        let w = 32
        let h = 32
        geometry = new THREE.SphereGeometry(rad, w, h)
        material = new THREE.MeshLambertMaterial({
            color: "#32b838",
        })
        let meshLeaf = new THREE.Mesh(geometry, material)
        meshLeaf.castShadow = true
        meshLeaf.position.y = 50
        meshLeaf.position.x = -62
        meshLeaf.position.z = -70

        canvas.add(meshLeaf)
    }
    leaf3()

    let leaf4 = () => {
        let geometry, material
        let rad = 10
        let w = 32
        let h = 32
        geometry = new THREE.SphereGeometry(rad, w, h)
        material = new THREE.MeshLambertMaterial({
            color: "#32b838",
        })
        let meshLeaf = new THREE.Mesh(geometry, material)
        meshLeaf.castShadow = true
        meshLeaf.position.y = 65
        meshLeaf.position.x = -70
        meshLeaf.position.z = -70

        canvas.add(meshLeaf)
    }
    leaf4()
}

//pipa pertama
let pipe1 = () => {
    let body = () => {
        let geometry, material
        let rad = 9
        let h = 18
        geometry = new THREE.CylinderGeometry(rad, rad, h, 36, 3)
        material = new THREE.MeshLambertMaterial({
            color: "#009933",
        })
        let meshBody = new THREE.Mesh(geometry, material)
        meshBody.castShadow = true
        meshBody.position.y = 19
        meshBody.position.x = -75
        meshBody.position.z = 10

        canvas.add(meshBody)
    }
    body()

    let head = () => {
        let geometry, material
        let rad = 10
        let tube = 3
        geometry = new THREE.TorusGeometry(rad, tube, 5, 100, 7)
        material = new THREE.MeshLambertMaterial({
            color: "#009933",
        })
        let meshHead = new THREE.Mesh(geometry, material)
        meshHead.castShadow = true
        meshHead.position.y = 29
        meshHead.position.x = -75
        meshHead.position.z = 10
        meshHead.rotation.x = 29.86
        canvas.add(meshHead)
    }
    head()
}

//pipa kedua
let pipe2 = () => {
    let body = () => {
        let geometry, material
        let rad = 9
        let h = 18
        geometry = new THREE.CylinderGeometry(rad, rad, h, 36, 3)
        material = new THREE.MeshLambertMaterial({
            color: "#009933",
        })
        let meshBody = new THREE.Mesh(geometry, material)
        meshBody.castShadow = true
        meshBody.position.y = 19
        meshBody.position.x = 75
        meshBody.position.z = -45

        canvas.add(meshBody)
    }
    body()

    let head = () => {
        let geometry, material
        let rad = 10
        let tube = 3
        geometry = new THREE.TorusGeometry(rad, tube, 5, 100, 7)
        material = new THREE.MeshLambertMaterial({
            color: "#009933",
        })
        let meshHead = new THREE.Mesh(geometry, material)
        meshHead.castShadow = true
        meshHead.position.y = 29
        meshHead.position.x = 75
        meshHead.position.z = -45
        meshHead.rotation.x = 29.86
        canvas.add(meshHead)
    }
    head()
}

// kotak pertama(panjang)
var boxLong1 = () => {
    var BrickBox1 = () => {
        let boxWidth = 10
        let boxHeight = 10
        let boxDepth = 10
        let boxWidthSegments = 1
        let boxHeightSegments = 5
        let boxDepthSegments = 7

        let geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth, boxWidthSegments, boxHeightSegments, boxDepthSegments)
        let texture = new THREE.TextureLoader()
        let boxQuestion = texture.load("./assets/textures/mario brick box.png")
        let material = new THREE.MeshStandardMaterial({
            map: boxQuestion,
        })

        let boxMesh = new THREE.Mesh(geometry, material)
        boxMesh.castShadow = true
        boxMesh.position.set(-90, 70, -20)
        canvas.add(boxMesh)
    }
    BrickBox1()
    
    var BrickBox2 = () => {
        let boxWidth = 10
        let boxHeight = 10
        let boxDepth = 10
        let boxWidthSegments = 1
        let boxHeightSegments = 5
        let boxDepthSegments = 7

        let geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth, boxWidthSegments, boxHeightSegments, boxDepthSegments)
        let texture = new THREE.TextureLoader()
        let boxQuestion = texture.load("./assets/textures/mario brick box.png")
        let material = new THREE.MeshStandardMaterial({
            map: boxQuestion,
        })

        let boxMesh = new THREE.Mesh(geometry, material)
        boxMesh.castShadow = true
        boxMesh.position.set(-90, 70, -40)
        canvas.add(boxMesh)
    }
    BrickBox2()

    var BrickBox3 = () => {
        let boxWidth = 10
        let boxHeight = 10
        let boxDepth = 10
        let boxWidthSegments = 1
        let boxHeightSegments = 5
        let boxDepthSegments = 7

        let geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth, boxWidthSegments, boxHeightSegments, boxDepthSegments)
        let texture = new THREE.TextureLoader()
        let boxQuestion = texture.load("./assets/textures/mario brick box.png")
        let material = new THREE.MeshStandardMaterial({
            map: boxQuestion,
        })

        let boxMesh = new THREE.Mesh(geometry, material)
        boxMesh.castShadow = true
        boxMesh.position.set(-90, 70, -60)
        canvas.add(boxMesh)
    }
    BrickBox3()
    
    var QuestBox1 = () => {
        let boxWidth = 10
        let boxHeight = 10
        let boxDepth = 10
        let boxWidthSegments = 1
        let boxHeightSegments = 5
        let boxDepthSegments = 7

        let geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth, boxWidthSegments, boxHeightSegments, boxDepthSegments)
        let texture = new THREE.TextureLoader()
        let boxQuestion = texture.load("./assets/textures/mario quest box.png")
        let material = new THREE.MeshStandardMaterial({
            map: boxQuestion,
        })

        let boxMesh = new THREE.Mesh(geometry, material)
        boxMesh.castShadow = true
        boxMesh.position.set(-90, 70, -50)
        canvas.add(boxMesh)
    }
    QuestBox1()

    var QuestBox2 = () => {
        let boxWidth = 10
        let boxHeight = 10
        let boxDepth = 10
        let boxWidthSegments = 1
        let boxHeightSegments = 5
        let boxDepthSegments = 7

        let geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth, boxWidthSegments, boxHeightSegments, boxDepthSegments)
        let texture = new THREE.TextureLoader()
        let boxQuestion = texture.load("./assets/textures/mario quest box.png")
        let material = new THREE.MeshStandardMaterial({
            map: boxQuestion,
        })

        let boxMesh = new THREE.Mesh(geometry, material)
        boxMesh.castShadow = true
        boxMesh.position.set(-90, 70, -30)
        canvas.add(boxMesh)
    }
    QuestBox2()
}

var boxLong2 = () => {
    var BrickBox1 = () => {
        let boxWidth = 10
        let boxHeight = 10
        let boxDepth = 10
        let boxWidthSegments = 1
        let boxHeightSegments = 5
        let boxDepthSegments = 7

        let geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth, boxWidthSegments, boxHeightSegments, boxDepthSegments)
        let texture = new THREE.TextureLoader()
        let boxQuestion = texture.load("./assets/textures/mario brick box.png")
        let material = new THREE.MeshStandardMaterial({
            map: boxQuestion,
        })

        let boxMesh = new THREE.Mesh(geometry, material)
        boxMesh.castShadow = true
        boxMesh.position.set(-20, 55, -70)
        canvas.add(boxMesh)
    }
    BrickBox1()
    
    var BrickBox2 = () => {
        let boxWidth = 10
        let boxHeight = 10
        let boxDepth = 10
        let boxWidthSegments = 1
        let boxHeightSegments = 5
        let boxDepthSegments = 7

        let geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth, boxWidthSegments, boxHeightSegments, boxDepthSegments)
        let texture = new THREE.TextureLoader()
        let boxQuestion = texture.load("./assets/textures/mario brick box.png")
        let material = new THREE.MeshStandardMaterial({
            map: boxQuestion,
        })

        let boxMesh = new THREE.Mesh(geometry, material)
        boxMesh.castShadow = true
        boxMesh.position.set(-20, 55, -80)
        canvas.add(boxMesh)
    }
    BrickBox2()

    var BrickBox3 = () => {
        let boxWidth = 10
        let boxHeight = 10
        let boxDepth = 10
        let boxWidthSegments = 1
        let boxHeightSegments = 5
        let boxDepthSegments = 7

        let geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth, boxWidthSegments, boxHeightSegments, boxDepthSegments)
        let texture = new THREE.TextureLoader()
        let boxQuestion = texture.load("./assets/textures/mario brick box.png")
        let material = new THREE.MeshStandardMaterial({
            map: boxQuestion,
        })

        let boxMesh = new THREE.Mesh(geometry, material)
        boxMesh.castShadow = true
        boxMesh.position.set(-20, 55, -90)
        canvas.add(boxMesh)
    }
    BrickBox3()
}

// kotak kedua (kotak tanda tanya)
let boxQuest = () => {
    let createBoxQ = () => {
        let boxWidth = 10
        let boxHeight = 10
        let boxDepth = 10
        let boxWidthSegments = 1
        let boxHeightSegments = 5
        let boxDepthSegments = 7

        let geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth, boxWidthSegments, boxHeightSegments, boxDepthSegments)
        let texture = new THREE.TextureLoader()
        let boxQuestion = texture.load("./assets/textures/mario quest box.png")
        let material = new THREE.MeshStandardMaterial({
            map: boxQuestion,
        })

        let boxMesh = new THREE.Mesh(geometry, material)
        boxMesh.castShadow = true
        boxMesh.position.set(30, 40, 80)
        canvas.add(boxMesh)
    }
    createBoxQ()
}

//lantai
let makeFloor = () => {
    let geo = new THREE.PlaneGeometry(300, 300)
    let texture = new THREE.TextureLoader()
    let text = texture.load("./assets/textures/brick.png")
    let material = new THREE.MeshStandardMaterial({
        map: text,
        side: THREE.DoubleSide,
    })

    let mesh = new THREE.Mesh(geo, material)
    mesh.rotation.x = -Math.PI / 2
    mesh.rotation.y = 0
    mesh.rotation.z = 0
    mesh.receiveShadow = true
    mesh.position.set(0, 10, 0)

    canvas.add(mesh)
}

// Skybox()
let SkyBox = () => {
    let BoxGeo = new THREE.BoxGeometry(500,500,500)
    let BoxLoader = new THREE.TextureLoader()

    let right = BoxLoader.load('./assets/sky box/868428.png')
    let left = BoxLoader.load('./assets/sky box/868428.png')
    let up = BoxLoader.load('./assets/sky box/868428(1).png')
    let down = BoxLoader.load('./assets/sky box/868428(1).png')
    let front = BoxLoader.load('./assets/sky box/868428.png')
    let back = BoxLoader.load('./assets/sky box/868428.png')

    let BoxMat = [
        new THREE.MeshBasicMaterial({
            map : left,
            side: THREE.BackSide
        }),
        new THREE.MeshBasicMaterial({
            map : right,
            side: THREE.BackSide
        }),
        new THREE.MeshBasicMaterial({
            map : up,
            side: THREE.BackSide
        }),
        new THREE.MeshBasicMaterial({
            map : down,
            side: THREE.BackSide
        }),
        new THREE.MeshBasicMaterial({
            map : back,
            side: THREE.BackSide
        }),
        new THREE.MeshBasicMaterial({
            map : front,
            side: THREE.BackSide
        }),
    ]
    let boxMesh = new THREE.Mesh(BoxGeo,BoxMat)
    canvas.add(boxMesh)
}

let pointLight = () => {
    const lighting = new THREE.PointLight("#FFFFFF", 0.34, 10000)
    lighting.castShadow = true
    lighting.position.set(0, 300, 20)

    canvas.add(lighting)
}

let createAmbientLight = () => {
    let light = new THREE.AmbientLight(0xfffffff)

    canvas.add(light)
}

var doRender = () => {
    requestAnimationFrame(doRender)
    rendering.render(canvas, cam)
}

window.onload = () => {
    init()
    doRender()
}
