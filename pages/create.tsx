import {Box, Heading} from "@chakra-ui/react";
import {BuyButton} from "../components/BuyButton";
import Page from "./page";
import {Button} from "../components/Buttons";
import {ChangeEvent, Suspense, useRef, useState} from "react";
import Cropper from "react-easy-crop";
import {Area} from "react-easy-crop/types";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Mug from "../components/Mug";
import {cropImage} from "../utils/image.utils";

const Create = () => {

  const [photoUrl, setPhotoUrl] = useState<string>('')
  const [croppedUrl, setCroppedUrl] = useState<string>()

  const [crop, setCrop] = useState({x: 0, y: 0})
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>()

  const fileInput = useRef<any>(null)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      URL.revokeObjectURL(photoUrl)
      const url = URL.createObjectURL(event.target.files[0]);
      setPhotoUrl(url)
    }
  }

  const onClick = async () => {
    if (photoUrl && croppedAreaPixels) {
      const croppedUrl = await cropImage(photoUrl, croppedAreaPixels)
      setCroppedUrl(croppedUrl)
    }
  }

  return (
    <Page>
      <Heading>Create</Heading>

      <input
        type='file'
        name='image'
        ref={fileInput}
        onChange={onChange}
        style={{display: 'none'}}
      />

      <Cropper
        style={{
          containerStyle: {
            position: 'relative',
            width: '100%',
            height: 300,
            background: '#333',
          }
        }}
        image={photoUrl}
        crop={crop}
        zoom={zoom}
        aspect={16 / 6}
        onCropChange={setCrop}
        onCropComplete={(croppedArea, croppedAreaPixels) => setCroppedAreaPixels(croppedAreaPixels)}
        onZoomChange={setZoom}
      />

      <Button
        onClick={onClick}
      >Crop</Button>


      <Button
        onClick={() => fileInput.current.click()}
      >Choose File</Button>

      <Box height="50vh">
        <Canvas camera={{position: [2.186, 1.763, 15.216]}}>
          <ambientLight intensity={1}/>
          <pointLight position={[10, 10, 10]}/>
          <OrbitControls/>
          <Suspense fallback={null}>
            <Mug image={croppedUrl} position={[0, 0, 0]}/>
          </Suspense>
        </Canvas>
      </Box>

      <BuyButton/>

    </Page>
  )
}

export default Create
