import React from 'react'
import styles from '/styles/component/footer/Footer.module.css'
import { Heading,Box } from '@chakra-ui/react'
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'

  



const Footer = () => {
    return (
        <Box>
            <Box className={styles.main}>
                 <List spacing={3}>
                <Box className={styles.container}>
                    <Box className={styles.f1part}>
                        <Box>
                            <Heading >HypeIndustry</Heading>
                            <ListItem>HypeIndustry Concept</ListItem>
                            <ListItem>Buying Guide</ListItem>
                            <ListItem>SelListItemng Guide</ListItem>
                        </Box>
                        <Box>
                            <Heading>Hype Offers</Heading>
                            <ListItem>Footwear</ListItem>
                            <ListItem>Apparel</ListItem>
                            <ListItem>Accessories</ListItem>
                        </Box>
                        <Box>
                            
                            <Heading>Shipping</Heading>
                            <ListItem>Shipping for buyers</ListItem>
                            <ListItem>Shipping for sellers</ListItem>
                        </Box>
                    </Box>
                    <Box className={styles.f2part}>
                        <Heading style={{ color: 'white' }}>Contact Us</Heading>
                        <ListItem>shoping@HypeIndustry.com</ListItem>
                        <ListItem>sales@HypeIndustry.com</ListItem>
                    </Box>
                </Box>
                </List>
                <Box className={styles.hrstyle}> </Box>
                <Box style={{ color: 'white', textAlign: 'center', paddingBottom: 20 }}>
                    &copy; 2022  HypeIndustry</Box>
            </Box>
        </Box>

    )
}

export default Footer