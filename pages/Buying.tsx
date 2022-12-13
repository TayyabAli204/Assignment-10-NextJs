import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Simplecard from '../components/simplecard/Simplecard'
import { Box, Heading, Center, Text } from '@chakra-ui/react'
import { Button, Stack, HStack } from '@chakra-ui/react'
import { Icon, createIcon } from '@chakra-ui/react'
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons'
import Footer from '../components/footer/Footer'

const HypeIndustry_buying = () => {
    return (
        <div>



            <Navbar />
            <Simplecard  />

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
                        <Box marginTop='20px' opacity={0.2}  border='1px dashed #677088' w='100%' order='1' h='0' flexGrow='0'></Box>

                    </Box>

                    <Box>
                        <HStack display='flex' lineHeight='20px'>
                            <Text fontWeight='bold'>Shipment Damage

                            </Text>
                            <Icon display='flex' as={ChevronDownIcon} w={8} h={8} color='#67CBAB' />
                        </HStack>
                        <Box marginTop='20px' opacity={0.2}  border='1px dashed #677088' w='100%' order='1' h='0' flexGrow='0'></Box>

                    </Box>
                    <Box>
                        <HStack display='flex' lineHeight='20px'>
                            <Text fontWeight='bold'>Minimum orders

                            </Text>
                            <Icon display='flex' as={ChevronDownIcon} w={8} h={8} color='#67CBAB' />
                        </HStack>
                        <Box marginTop='20px' opacity={0.2}  border='1px dashed #677088' w='100%' order='1' h='0' flexGrow='0'></Box>

                    </Box>
                    <Box>
                        <HStack display='flex' lineHeight='20px'>
                            <Text fontWeight='bold'>Taxes and Duties
                            </Text>
                            <Icon display='flex' as={ChevronDownIcon} w={8} h={8} color='#67CBAB' />
                        </HStack>
                        <Box marginTop='20px' opacity={0.2}  border='1px dashed #677088' w='100%' order='1' h='0' flexGrow='0'></Box>
                    </Box>
                </Box>

                <Footer/>
            </Box>
        </div>
    )
}

export default HypeIndustry_buying