import React from 'react'
import { Box, Heading, Center, Text } from '@chakra-ui/react'
import { Button, Stack, HStack } from '@chakra-ui/react'
import { Icon, createIcon } from '@chakra-ui/react'
import { ChevronUpIcon,ChevronDownIcon } from '@chakra-ui/icons'



const Contentnav = () => {
    return (
        <div>
            <Box w='100%' h='150vh' bg='#F9FAFD' >

                <Center>
                    <Heading marginTop='50'>Selling on HypeIndustry</Heading>
                </Center>

                <Box w='50%' bg='white' h='50' marginLeft='300' marginTop='50' >
                    <Stack spacing={1} direction='row' align='center' p='5px'  >
                        <Button bg='#67CBAB' size='md' color='white'>
                            BECOME A SELLER  become
                        </Button>
                        <Button size='md' color='black' bg='white'>
                            CREATE A LISTING
                        </Button>
                        <Button size='md' color='black' bg='white'>
                            SELLER FEES
                        </Button>
                        <Button size='md' color='black' bg='white'>
                            CONDITION OF ITEMS
                        </Button>
                    </Stack>
                </Box>

                <Box display='flex' flexDirection='column' alignItems='flex-start' gap='30px' w='50%' height='fit-content'
                    marginLeft='300' marginTop='50'>
                    <Box >
                        <HStack display='flex' lineHeight='20px'>
                            <Text fontWeight='bold'>How do I sell on HypeIndustry?</Text>
                            <Icon display='flex' as={ChevronUpIcon} w={8} h={8} color='#67CBAB' />
                        </HStack>
                        <Box marginTop='20px' opacity={0.2} border='1px dashed #677088' w='100%' order='1' h='0' flexGrow='0'></Box>
                        <Text marginTop='20px' color='#677088' order='2' flexGrow='0' fontSize='14px' fontWeight='400' lineHeight='150%'>To ensure the quality and authenticity of all items on our marketplace, we only allow a select group of stores and sellers that
                            have passed our verification process, to sell on our platform. We encourage you to request to become a seller by filling out all
                            the required information. We ll notify you as soon as your request has been approved.</Text>
                    </Box>

                    <Box>
                        <HStack display='flex' lineHeight='20px'>
                            <Text fontWeight='bold'>I requested to become a SELLER, how long will it take to get approved?
                            </Text>
                            <Icon display='flex' as={ChevronDownIcon} w={8} h={8} color='#67CBAB' />
                        </HStack>
                        <Box marginTop='20px' opacity={0.2} border='1px dashed #677088' w='100%' order='1' h='0' flexGrow='0'></Box>

                    </Box>

                    <Box>
                        <HStack display='flex' lineHeight='20px'>
                            <Text fontWeight='bold'>How do I delete my Account?
                            </Text>
                            <Icon display='flex' as={ChevronDownIcon} w={8} h={8} color='#67CBAB' />
                        </HStack>
                        <Box marginTop='20px' opacity={0.2} border='1px dashed #677088' w='100%' order='1' h='0' flexGrow='0'></Box>

                    </Box>
                    <Box>
                        <HStack display='flex' lineHeight='20px'>
                            <Text fontWeight='bold'>Can I share my seller privileges with others?
                            </Text>
                            <Icon display='flex' as={ChevronDownIcon} w={8} h={8} color='#67CBAB' />
                        </HStack>
                        <Box marginTop='20px' opacity={0.2} border='1px dashed #677088' w='100%' order='1' h='0' flexGrow='0'></Box>

                    </Box>
                    <Box>
                        <HStack display='flex' lineHeight='20px'>
                            <Text fontWeight='bold'>Can I create several Seller Accounts?
                            </Text>
                            <Icon display='flex' as={ChevronDownIcon} w={8} h={8} color='#67CBAB' />
                        </HStack>
                        <Box marginTop='20px' opacity={0.2} border='1px dashed #677088' w='100%' order='1' h='0' flexGrow='0'></Box>

                    </Box>
                    <Box>
                        <HStack display='flex' lineHeight='20px'>
                            <Text fontWeight='bold'>Can I create several Seller Accounts?
                            </Text>
                            <Icon display='flex' as={ChevronDownIcon} w={8} h={8} color='#67CBAB' />
                        </HStack>
                        <Box marginTop='20px' opacity={0.2} border='1px dashed #677088' w='100%' order='1' h='0' flexGrow='0'></Box>
                    </Box>
                </Box>



            </Box>
        </div>
    )
}

export default Contentnav













