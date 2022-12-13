
import React from 'react'
import styles from '/styles/component/simplecard/Simplecard.module.css'
import Image from 'next/image'
import { Button } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Center, Text, Box } from '@chakra-ui/react'


const Simplecard = () => {
    return (
        <div>

            <Heading style={{ textAlign: 'center' ,marginTop:'50px' }}>Buying on Hypeindustry is simple!</Heading>
            <div className={styles.mainheading}>
                <div className={styles.subheading}>
                    <div className={styles.heading} >
                        <Flex color='white' >
                            <Center w='60px' h='60px' bg='black' borderRadius='50px' fontWeight='bold' fontSize='4xl'>
                                <Text >1</Text>
                            </Center>
                            <Box padding='4' color='black' maxW='sm'>
                                Create a buyer account / profile, with all required fields: Full name, Company name or Store Name, Address, Credit Card info etc...
                            </Box>
                        </Flex>
                    </div>

                    <div className={styles.heading1} >
                        <Flex color='white' marginTop='30' marginRight='50'>
                            <Center w='60px' h='60px' bg='black' borderRadius='50px' fontWeight='bold' fontSize='4xl'>
                                <Text>2</Text>
                            </Center>
                            <Box padding='4' color='black' maxW='sm'  >
                                You will then receive email alerts whenever any
                                seller posts an offer on the platform. Then it is
                                up to you to click on the link to view the offer or
                                not. Of course, each email alert contains the
                                offer details and models, so you know what
                                has been posted, and if it is in any of your
                                interest to purchase or not.
                            </Box>
                        </Flex>
                    </div>

                </div>



                <div className={styles.subheading}>
                    <div className={styles.heading} >
                        <Flex color='white' >
                            <Center w='60px' h='60px' bg='black' borderRadius='50px' fontWeight='bold' fontSize='4xl'>
                                <Text >3</Text>
                            </Center>
                            <Box padding='4' color='black' maxW='sm'>
                                The offer can either be: an open stock inventory ,
                                meaning you can select any sizes you want from the
                                seller stock with of course a minimum quantity
                                imposed by the seller (if he wants to), or a buy all /
                                take all offer , which means that the seller wants
                                you to buy all the quantities in that specific model.

                            </Box>
                        </Flex>
                    </div>

                    <div className={styles.heading1} >
                        <Flex color='white' marginTop='30' marginRight='50'>
                            <Center w='60px' h='60px' bg='black' borderRadius='50px' fontWeight='bold' fontSize='4xl'>
                                <Text>4</Text>
                            </Center>
                            <Box padding='4' color='black' maxW='sm'  >
                                Once logged in, simply view the offer and click
                                on any of the models you wish to order by
                                clicking on the open stock / or buy all
                                buttons.
                            </Box>
                        </Flex>
                    </div>

                </div>


                <div className={styles.subheading}>
                    <div className={styles.heading} >
                        <Flex color='white' >
                            <Center w='60px' h='60px' bg='black' borderRadius='50px' fontWeight='bold' fontSize='4xl'>
                                <Text >5</Text>
                            </Center>
                            <Box padding='4' color='black' maxW='sm'>
                                Once the seller approves the order, (this might take
                                10 min or up to to 3 days) your credit card will be
                                charged, and you will receive an email with a
                                tracking number. NO charges will be done unless
                                orders are APPROVED ! We created a dashboard for
                                buyers so you can see all the information you need:

                            </Box>
                        </Flex>
                    </div>

                    <div className={styles.heading1} >
                        <Flex color='white' marginTop='30' marginRight='50'>
                            <Center w='60px' h='60px' bg='black' borderRadius='50px' fontWeight='bold' fontSize='4xl'>
                                <Text>6</Text>
                            </Center>
                            <Box padding='4' color='black' maxW='sm'  >
                                Please keep in mind: there are no refunds, no
                                returns, no order cancellations, all sales are
                                finals unless the wrong items were shipped!
                                This is a B2B Platform
                            </Box>
                        </Flex>
                    </div>

                </div>


            </div>
            <div className={styles.btn}>

                <Button
                    style={{ borderRadius: '50px' }}
                    size='md'
                    height='48px'
                    width='150px'
                    background='#67CBAB'
                    borderColor='green.500'
                    color='white'
                >
                    learn more
                </Button>
            </div>

        </div>
    )
}

export default Simplecard