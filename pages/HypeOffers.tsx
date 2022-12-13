import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Box, Heading, Text, Icon, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import Footer from '../components/footer/Footer'
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons'


const HypeIndustry_shipping_for_buyers = () => {
    return (
        <div>
            <Navbar />



            <Box width='100%' height='50%' >
                <Box display='flex' marginTop='50px' marginLeft='100px' >
                    <Box width='40%' paddingLeft='-40px' color='#677088' mt={50} >
                        <Heading color='black'>Shipping for buyers</Heading>
                        <Text width='100%' paddingTop='20px' > All of our items are being shipped from several warehouses/stores in the USA and worldwide, and usually ships within 24h to 5 business days depending on the seller shipping time. </Text>

                        <Text width='50' paddingTop='20px' color='#677088' >We take care of all customs paperwork for you , so you can sleep well at night!
                        </Text>
                        <Text width='100%' paddingTop='20px'>1 .Sellers: Just pack the shoes, tape the
                            box(es)properly with lots of tape, request your labels via email, and relax! The rest
                            will be taken care of ☺ </Text>
                        <Text width='100%' paddingTop='20px' color='#677088'>2 .Buyers: Don’t worry, we will make sure: a proper value, tariff code and description are entered and that no problems occur from the time packages
                            leave the country and arrive in your country to clear customs!</Text>
                    </Box>
                    <Box width='40%' marginLeft={70} mt={50} >
                        <Image src='/p3/g2.png' alt='hello' width={500} height={500} />
                    </Box>

                </Box>

                <Box display='flex' marginTop='60px' marginLeft='100px' >
                    <Box width='50%'>
                        <Image src='/p3/g1.png' alt='hello' width={500} height={500} />
                    </Box>

                    <Box width='40%' paddingLeft='-40px' color='#677088'>
                        <Heading color='black' fontWeight='medium'  fontSize='20px'>How much does shipping COST</Heading>
                        <Text width='100%' paddingTop='20px' > The default shipping cost for sellers & buyers on the platform is $2.50/pair for domestic shipments within the USA, and $10-$12.50/pair for international express shipments. That will vary based on the seller & buyer location. Of course, shipping cost are pretty low, as we are dealing with bulk purchases,
                         resulting in cost-effective shipping.</Text>
                    </Box>

                </Box>
            </Box>





            
            
            <Box bgColor='#F9FAFD' w='100%' h='50%' >
                <Box display='flex' flexDirection='column' mb={50} alignItems='flex-start' gap='30px' w='50%'
                    marginLeft='300' >
                    <Box >
                        <HStack display='flex' lineHeight='20px' marginTop='50'>
                            <Text fontWeight='bold'>Can I order other items  are not offered on the platform? Do you offer pre order?</Text>
                            <Icon display='flex' as={ChevronUpIcon} w={8} h={8} color='#67CBAB' />
                        </HStack>
                        <Box marginTop='20px' opacity={0.2} border='1px dashed #677088' w='100%' order='1' h='0' flexGrow='0'></Box>
                        <Text marginTop='20px' color='#677088' order='2' flexGrow='0' fontSize='14px' fontWeight='400' lineHeight='150%'>NO not at all, only what is offered on the platform is available to purchase! We have new items on a daily basis, so check back
                            often!No pre order, this is a live offer with product in stock !!!!</Text>
                    </Box>

                    <Box>
                        <HStack display='flex' lineHeight='20px'>
                            <Text fontWeight='bold'>Sizing
                            </Text>
                            <Icon display='flex' as={ChevronDownIcon} w={8} h={8} color='#67CBAB' />
                        </HStack>
                        <Box marginTop='20px' opacity={0.2} border='1px dashed #677088' w='100%' order='1' h='0' flexGrow='0'></Box>

                    </Box>

                    <Box>
                        <HStack display='flex' lineHeight='20px'>
                            <Text fontWeight='bold'>Shipment Damage

                            </Text>
                            <Icon display='flex' as={ChevronDownIcon} w={8} h={8} color='#67CBAB' />
                        </HStack>
                        <Box marginTop='20px' opacity={0.2} border='1px dashed #677088' w='100%' order='1' h='0' flexGrow='0'></Box>

                    </Box>
                    <Box>
                        <HStack display='flex' lineHeight='20px'>
                            <Text fontWeight='bold'>Minimum orders

                            </Text>
                            <Icon display='flex' as={ChevronDownIcon} w={8} h={8} color='#67CBAB' />
                        </HStack>
                        <Box marginTop='20px' opacity={0.2} border='1px dashed #677088' w='100%' order='1' h='0' flexGrow='0'></Box>

                    </Box>
                    <Box>
                        <HStack display='flex' lineHeight='20px'>
                            <Text fontWeight='bold'>Taxes and Duties
                            </Text>
                            <Icon display='flex' as={ChevronDownIcon} w={8} h={8} color='#67CBAB' />
                        </HStack>
                        <Box marginTop='20px' opacity={0.2} border='1px dashed #677088' w='100%' order='1' h='0' flexGrow='0'></Box>
                    </Box>
                </Box>

                <Footer/>
            </Box>
        </div>
    )
}

export default HypeIndustry_shipping_for_buyers