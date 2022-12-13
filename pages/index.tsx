import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Simplecard from '../components/simplecard/Simplecard'
import styles from '../styles/Home.module.css'
import { Box, Flex, Heading, Text, Icon } from '@chakra-ui/react'
import Contentnav from '../components/contentnav/Contentnav'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'


export default function Home() {
  return (

    <div className={styles.container}>


      <Navbar />

      <Box bgImage="url('/picture/Vector.png')" bgPosition="right"
        bgRepeat="no-repeat" width='100%' height='500'
      >
        <Box maxW={550} paddingLeft='90px' paddingTop='90px' >

          <Heading verticalAlign='center'    >New marketplace that
            allows you to buy in bulk</Heading>
          <Text marginTop={30} color='#677088'>Hypeindustry is a one-of-a-kind Platform+Marketplace offering Bulk/
            Wholesale goods from Stores, Boutiques,Wholesalers & Resellers for the
            Footwear,Apparel & Accessory industry.</Text>
            <Button
                    style={{ borderRadius: '50px' }}
                    size='md'
                    height='48px'
                    width='150px'
                    background='#67CBAB'
                    borderColor='green.500'
                    color='white'
                    marginTop={30}
                >
                    learn more
                </Button>
        </Box>

      </Box>

      <Box display='flex' marginTop='50px' marginLeft='100px' >
        <Box marginRight='100px' width='50%'>
          <Image
            src='/picture/side1.png'
            alt='hello'
            width={600}
            height={300}
          />
        </Box>
        <Box width='50%' borderLeft='2px solid black' paddingLeft='50px'>
          <Heading maxW='25rem' size='md' paddingTop='30'>Why HypeIndustry and what is it</Heading>
          <Text width='80%' paddingTop='50px'>Buy cheaper because of the bulk volume discount and resell
            worldwide to make a small margin and keep the volume and
            recurrence active! The key to make your money fast </Text>
          

        </Box>
      </Box>
      <Box display='flex' marginTop='50px' marginLeft='100px' >
        <Box width='50%' borderLeft='2px solid black' paddingLeft='50px'>
          <Text width='80%' paddingTop='50px'>Buy cheaper because of the bulk volume discount and resell
            worldwide to make a small margin and keep the volume and
            recurrence active! The key to make your money fast </Text>
          <Text color='#67CBAB' fontSize='lg' fontWeight='bold' lineHeight='350%'> Read more
            <Icon as={ChevronRightIcon} w={8} h={8} color='#67CBAB' /></Text>

        </Box>
        <Box marginRight='100px' width='50%'>
          <Image
            src='/picture/side2.png'
            alt='hello'
            width={600}
            height={300}
          />
        </Box>
      </Box>

      <Contentnav />
      <Simplecard />
      <Box bg=' #F9FAFD;' w='100%' h='70vh'>
        <Box display='flex'>
          <Flex display='flex' marginLeft='150' marginTop='150'>
            <Box >
              <Image
                src='/picture/wallet 2.png'
                alt='thus is first cardImage'
                width={50}
                height={50}
              />
              <Heading fontFamily='Roboto' color='black' fontStyle='normal' fontWeight='bold' lineHeight='70px'>Shipping for buyers</Heading>
              <Text fontFamily='Roboto' color='color: #677088;' lineHeight='150%' fontSize='16px'>All of our items are being shipped from several warehouses/stores in the
                USA and worldwide, and usually ships within 24 H to 5 business days
                depending on the seller s shipping time.</Text>
              <Text color='#67CBAB' fontSize='lg' fontWeight='bold' lineHeight='350%'> Read more
                <Icon as={ChevronRightIcon} w={8} h={8} color='#67CBAB' />

              </Text>
            </Box>
          </Flex>

          <Flex display='flex' marginLeft='150' marginTop='150'>
            <Box >
              <Image
                src='/picture/package.png'
                alt='thus is first cardImage'
                width={50}
                height={50}
              />
              <Heading fontFamily='Roboto' color='black' fontStyle='normal' fontWeight='bold' lineHeight='70px'>Shipping for sellers</Heading>
              <Text fontFamily='Roboto' color='color: #677088;' lineHeight='150%' fontSize='16px'>
                Once you have approved the purchase, you can request for your labels by
                email at: shipping@hypeindustry.com! Make sure to include</Text>
              <Text color='#67CBAB' fontSize='lg' fontWeight='bold' lineHeight='350%'> Read more
                <Icon as={ChevronRightIcon} w={8} h={8} color='#67CBAB' />

              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Footer />


    </div>
  )
}
