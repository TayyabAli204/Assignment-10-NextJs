import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Box, Heading, Text, Icon, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import Footer from '../components/footer/Footer'
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { List, ListItem, ListIcon, OrderedList, UnorderedList, } from '@chakra-ui/react'

const HypeIndustry_shipping_for_seller = () => {
  return (
    <div>

      <Navbar />

      <Box bgColor='#F9FAFD' w='100%' h='50%' >
        <Box display='flex' flexDirection='column' mb={50} alignItems='flex-start' gap='30px' w='50%'
          marginLeft='300' >
          <Box >
            <HStack display='flex' lineHeight='20px' marginTop='50'>
              <Text fontWeight='bold' fontSize={20}>How do I get my prepaid shipping LABELS?</Text>
            </HStack>
            <Box marginTop='20px' opacity={0.2} border='1px dashed #677088' w='100%' order='1' h='0' flexGrow='0'></Box>
            <Text marginTop='20px' color='#677088' order='2' flexGrow='0' fontSize='14px' fontWeight='400' lineHeight='150%'>NO not at all, only what is offered on the platform is available to purchase! We have new items on a daily basis, so check back
              often!No pre order, this is a live offer with product in stock !!!!</Text>
          </Box>
          <HStack display='flex' lineHeight='20px'>
            <Text color='#677088'>We take care of all customs paperwork for you , so you can sleep well at night!
            </Text>
          </HStack>
          <HStack display='flex' lineHeight='20px'>
            <Text >
              <OrderedList color='#677088'>
                <ListItem>Buyer’s details in full, name , full address and invoice number.</ListItem>
                <ListItem >Box count and if possible boxes dimension.</ListItem>
                <ListItem>Total pairs shipped, no need for weight.</ListItem>
                <ListItem>Pick up requested yes or no , and address for pick up if needed</ListItem>
              </OrderedList>
            </Text>
          </HStack>
          <HStack display='flex' lineHeight='20px'>
            <Text color='#677088'>Labels are then emailed to you within 24h/48h.
              You can drop the boxes at an authorized shipper or request a pick-up. We can either schedule the pick-up for you, during your opening hours
              , or,  you can request the pick-up yourself at your own discretion! </Text>
          </HStack>
        </Box>

        <Box display='flex' flexDirection='column' mb={50} alignItems='flex-start' gap='30px' w='50%'
          marginLeft='300' >
          <Box >
            <HStack display='flex' lineHeight='20px' marginTop='50'>
              <Text fontWeight='bold' fontSize={20}>How do I pack the items I have SOLD?</Text>
            </HStack>
            <Box marginTop='20px' opacity={0.2} border='1px dashed #677088' w='100%' order='1' h='0' flexGrow='0'></Box>
            <Text marginTop='20px' color='#677088' order='2' flexGrow='0' fontSize='14px' fontWeight='400' lineHeight='150%'>This process is very easy! We suggest using standard Nike or Adidas boxes (29x19x16 or 30x20x15 inches), and pack 12 or 13 prs per box. If you unfold boxes properly you may be able to fit an extra pair or two! Check out this video we found (we are not in that video or know anyone in this video) it is a tutorial for sellers
              who do not know how to flatten shoe boxes. With this method you can pack 14 to 15 pairs versus 12 pairs per box:
              <Image
                src='/p4/youtube.png'
                alt='Youtube wali img'
                width={500}
                height={100}
                style={{ margin: '30px 80px 20px 70px' }}
              />
              Do not put more than 15 pairs of shoes per box and do not fold/flatten shoe boxes, that are not foldable! For example, certain pair of shoes like Jordan retro
              boxes do not fold and certain adidas consortium do not fold as well so please be very careful!
            </Text>
          </Box>


        </Box>

        <Footer />
      </Box>
    </div>
  )
}

export default HypeIndustry_shipping_for_seller