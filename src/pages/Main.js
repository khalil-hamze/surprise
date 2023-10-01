import React, { useEffect, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import Player from './Player';
import {Images} from '../config/images';
import { Musics } from '../config/musics';



function Main(){

    var data = [
        {
            id: 10001,
            src: Images.image_0001,
        },
        {
            id: 10103,
            src: Images.image_0103,
        },
        {
            id: 10686,
            src: Images.image_0686,
        },
        {
            id: 11190,
            src: Images.image_1190,
        },
        {
            id: 11725,
            src: Images.image_1725,
        },
        {
            id: 12364,
            src: Images.image_2364,
        },
        {
            id: 12814,
            src: Images.image_2814,
        },
        {
            id: 18800,
            src: Images.image_8800,
        },
        {
            id: 19424,
            src: Images.image_9424,
        },
        {
            id: 19747,
            src: Images.image_9747,
        },
        {
            id: 19920,
            src: Images.image_9920,
        },
        {
            id: 10002,
            src: Images.image_0002,
        },
        {
            id: 10200,
            src: Images.image_0200,
        },
        {
            id: 10689,
            src: Images.image_0689,
        },
        {
            id: 11389,
            src: Images.image_1389,
        },
        {
            id: 12025,
            src: Images.image_2025,
        },
        {
            id: 12408,
            src: Images.image_2408,
        },
        {
            id: 12881,
            src: Images.image_2881,
        },
        {
            id: 18890,
            src: Images.image_8890,
        },
        {
            id: 19452,
            src: Images.image_9452,
        },
        {
            id: 19790,
            src: Images.image_9790,
        },
        {
            id: 10064,
            src: Images.image_0064,
        },
        {
            id: 10208,
            src: Images.image_0208,
        },
        {
            id: 10788,
            src: Images.image_0788,
        },
        {
            id: 11399,
            src: Images.image_1399,
        },
        {
            id: 12138,
            src: Images.image_2138,
        },
        {
            id: 12461,
            src: Images.image_2461,
        },
        {
            id: 12908,
            src: Images.image_2908,
        },
        {
            id: 18917,
            src: Images.image_8917,
        },
        {
            id: 19483,
            src: Images.image_9483,
        },
        {
            id: 19827,
            src: Images.image_9827,
        },
        {
            id: 10065,
            src: Images.image_0065,
        },
        {
            id: 10228,
            src: Images.image_0228,
        },
        {
            id: 10860,
            src: Images.image_0860,
        },
        {
            id: 11704,
            src: Images.image_1704,
        },
        {
            id: 12213,
            src: Images.image_2213,
        },
        {
            id: 12472,
            src: Images.image_2472,
        },
        {
            id: 12938,
            src: Images.image_2938,
        },
        {
            id: 19084,
            src: Images.image_9084,
        },
        {
            id: 19726,
            src: Images.image_9726,
        },
        {
            id: 19879,
            src: Images.image_9879,
        },
        {
            id: 10093,
            src: Images.image_0093,
        },
        {
            id: 10587,
            src: Images.image_0587,
        },
        {
            id: 11105,
            src: Images.image_1105,
        },
        {
            id: 11716,
            src: Images.image_1716,
        },
        {
            id: 12363,
            src: Images.image_2363,
        },
        {
            id: 12790,
            src: Images.image_2790,
        },
        {
            id: 18779,
            src: Images.image_8779,
        },
        {
            id: 19303,
            src: Images.image_9303,
        },
        {
            id: 19731,
            src: Images.image_9731,
        },
        {
            id: 19907,
            src: Images.image_9907,
        },
    ];

    // useEffect(() => {
    //     setImages(data)
    // }, []);

    return (
        <div className="App" style={{marginTop: 50}}>
            <p style={{fontSize: 25}}>Please first play this music,</p>
            <Player url={Musics.chirin_music} />
            <p style={{marginInline: 70, textAlign: 'justify'}}>Rasha, awal ma kenna na3ml call b sheghel hasset shi tejehek bass ken fi shi ma 3am yesmahle oktohem hayetk. call 3an call haset hale 3am
                et2arab menik aktar mtl ka2eno sert 3am bethada hale la zabbet l osas kermel tkoune ente merteha w mabsouta. lama sar forsa w 2drt hkike
                barat sheghel hasset enno ksebet rfi2a ma knt sheyef mtla b kell hayete rfi2a b kel ma3na l kelme b mazhna w dehekna w aw2atna l helwe, hatta
                nafseyte shu betkoun merteha me3k. <br/><br/>

                Shwy 3a Shwy balashet en3ejeb fike aktar w et3awad 3lyke w bala ma hess hasset hale mas2oul 3annik ymkn la2eno ente wahdk b beirut ymkn la2eno 
                albe rtahlik, ymkn la2eno fi eshya jowete shadetne elik ma baarf bass ana haset b ha shi min telka2 nafse. <br/><br/>
                
                ma3 l 3elem enni hatet edeme wa3ed 3 hale ma fout b 3al2a hal fatra, bass 3ale2te fike tawaret w sert 3am be2sha3ik b maneme w khayele w kif ma eftol
                tafasilk kella rasamta b rase w sert shufa. allah yehmili yeke w yekhalile yeke w yeb3ed 3annik wled l haram, habytk min kell albe w ha dall hebbik
                l hobb 3am thessi ya ajmal warde atafa albe b ha dene w ya ajmal bnt b nazare ana w bass.
            </p>
            <p style={{color:'red', fontSize: 18, fontWeight: 'bold'}}>BHEBBIIIIIIIIIIIIIIIIIIIIIIIK</p>

            <p style={{fontSize: 12, fontWeight: 'bold'}}>Scroll Down</p>
            <p> ... <br/>
                ... <br/>
                ... <br/>
                ... <br/>
                ... <br/>
                ... <br/>
            </p>
            <center style={{marginTop: 800}}>
                <div>
                    <h1 style={{ color: "red", fontFamily: 'serif' }}>Happy Birthday Rasha</h1>
                    <h2>Our Album for this time nshalla byokbar sene jey</h2>
                </div>
                <div>
                    <ImageList sx={{ width: 700, height: 1000 }} 
                        cols={2} rowHeight={400}>
                        {data.map((idx) => (
                            <ImageListItem key={idx.src} >
                                <img
                                    src={`${idx.src}?w=
                                    164&h=164&fit=crop&auto=format`}
                                    srcSet={`${idx.src}?w=
                                    164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
            </center>
            {/* {images.map((image) => (
                <img key={image.id} src={image.src} alt={`Image ${image.id}`} />
            ))} */}
        </div>
    );

}

export default Main;
