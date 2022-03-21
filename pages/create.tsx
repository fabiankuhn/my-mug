import {Box, Heading} from "@chakra-ui/react";
import {BuyButton} from "../components/BuyButton";
import Page from "./page";
import {Button} from "../components/Buttons";
import {Suspense, useRef, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Mug from "../components/Mug";

const Create = () => {

  const [photo, setPhoto] = useState<any>()

  const fileInput = useRef<any>(null)

  const onChange = async (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log(e.target.files[0])
      const s = URL.createObjectURL(e.target.files[0]);
      setPhoto(s)
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
        style={{ display: 'none' }}
      />

      <Button
        onClick={() => fileInput.current.click()}
      >Choose File</Button>

      <Box height="50vh">
        <Canvas camera={{position: [2.186, 1.763, 15.216]}}>
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls/>
          <Suspense fallback={null}>
            <Mug image={photo} position={[0,0,0]}/>
          </Suspense>
        </Canvas>
      </Box>

      <BuyButton/>

    </Page>
  )
}

export default Create
