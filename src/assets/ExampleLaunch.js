export const launch= {
    "flight_number":60,
    "launch_year":"2018",
    "launch_date_unix":1524091860,
    "launch_date_utc":"2018-05-18T22:51:00Z",
    "launch_date_local":"2018-04-18T18:51:00-04:00",
    "rocket":{
       "rocket_id":"falcon9",
       "rocket_name":"Falcon 9",
       "rocket_type":"FT",
       "first_stage":{
          "cores":[
             {
                "core_serial":"B1045",
                "flight":1,
                "block":4,
                "reused":false,
                "land_success":true,
                "landing_type":"ASDS",
                "landing_vehicle":"OCISLY"
             }
          ]
       },
       "second_stage":{
          "payloads":[
             {
                "payload_id":"TESS",
                "reused":false,
                "customers":[
                   "NASA"
                ],
                "payload_type":"Satellite",
                "payload_mass_kg":350,
                "payload_mass_lbs":772,
                "orbit":"HEO"
             }
          ]
       }
    },
    "telemetry":{
       "flight_club":"https://www.flightclub.io/results/?code=TESS"
    },
    "reuse":{
       "core":true,
       "side_core1":false,
       "side_core2":false,
       "fairings":false,
       "capsule":false
    },
    "launch_site":{
       "site_id":"ccafs_slc_40",
       "site_name":"CCAFS SLC 40",
       "site_name_long":"Cape Canaveral Air Force Station Space Launch Complex 40"
    },
    "launch_success":true,
    "links":{
       "mission_patch":"https://images2.imgbox.com/1f/13/kR2sdzO4_o.png",
       "mission_patch_small":"https://images2.imgbox.com/f3/cd/Ub2z4QHa_o.png",
       "reddit_campaign":"https://www.reddit.com/r/spacex/comments/88l46q/tess_launch_campaign_thread/",
       "reddit_launch":"https://www.reddit.com/r/spacex/comments/8cm61o/rspacex_tess_official_launch_discussion_updates/",
       "reddit_recovery":null,
       "reddit_media":"https://www.reddit.com/r/spacex/comments/8cmzop/rspacex_tess_media_thread_videos_images_gifs/",
       "presskit":"http://www.spacex.com/sites/spacex/files/tesspresskitfinal417.pdf",
       "article_link":"https://spaceflightnow.com/2018/04/19/all-sky-surveyor-launched-from-cape-canaveral-on-the-hunt-for-exoplanets/",
       "video_link":"https://www.youtube.com/watch?v=aY-0uBIYYKk"
    },
    "details":"Part of the Explorers program, this space telescope is intended for wide-field search of exoplanets transiting nearby stars. It is the first NASA high priority science mission launched by SpaceX. It was the first time SpaceX launched a scientific satellite not primarily intended for Earth observations. The second stage placed it into a high-Earth elliptical orbit, after which the satellite's own booster will perform complex maneuvers including a lunar flyby, and over the course of two months, reach a stable, 2:1 resonant orbit with the Moon. In January 2018, SpaceX received NASA's Launch Services Program Category 2 certification of its Falcon 9 'Full Thrust', certification which is required for launching medium risk missions like TESS. It was the last launch of a new Block 4 booster, and marked the 24th successful recovery of the booster. An experimental water landing was performed in order to attempt fairing recovery."
 };
 
 export const launchPad = {
    "id":"ccafs_slc_40",
    "full_name":"Cape Canaveral Air Force Station Space Launch Complex 40",
    "status":"active",
    "location":{
       "name":"Cape Canaveral",
       "region":"Florida",
       "latitude":28.5618571,
       "longitude":-80.577366
    },
    "vehicles_launched":[
       "Falcon 9"
    ],
    "details":"SpaceX primary Falcon 9 launch pad, where all east coast Falcon 9s launched prior to the AMOS-6 anomaly. Initially used to launch Titan rockets for Lockheed Martin. Back online since CRS-13 on 2017-12-15."
 };

export const rocket = {
    "id":"falcon9",
    "name":"Falcon 9",
    "type":"rocket",
    "active":true,
    "stages":2,
    "boosters":0,
    "cost_per_launch":61200000,
    "success_rate_pct":94,
    "first_flight":"2010-06-04",
    "country":"United States",
    "company":"SpaceX",
    "height":{
       "meters":70,
       "feet":229.6
    },
    "diameter":{
       "meters":3.7,
       "feet":12
    },
    "mass":{
       "kg":549054,
       "lb":1207920
    },
    "payload_weights":[
       {
          "id":"leo",
          "name":"Low Earth Orbit",
          "kg":22800,
          "lb":50265
       },
       {
          "id":"gto",
          "name":"Geosynchronous Transfer Orbit",
          "kg":8300,
          "lb":18300
       },
       {
          "id":"mars",
          "name":"Mars Orbit",
          "kg":4020,
          "lb":8860
       }
    ],
    "first_stage":{
       "reusable":true,
       "engines":9,
       "fuel_amount_tons":385,
       "burn_time_sec":162,
       "thrust_sea_level":{
          "kN":7607,
          "lbf":1710000
       },
       "thrust_vacuum":{
          "kN":8227,
          "lbf":1849500
       }
    },
    "second_stage":{
       "engines":1,
       "fuel_amount_tons":90,
       "burn_time_sec":397,
       "thrust":{
          "kN":934,
          "lbf":210000
       },
       "payloads":{
          "option_1":"dragon",
          "option_2":"composite fairing",
          "composite_fairing":{
             "height":{
                "meters":13.1,
                "feet":43
             },
             "diameter":{
                "meters":5.2,
                "feet":17.1
             }
          }
       }
    },
    "engines":{
       "number":9,
       "type":"merlin",
       "version":"1D+",
       "layout":"octaweb",
       "engine_loss_max":2,
       "propellant_1":"liquid oxygen",
       "propellant_2":"RP-1 kerosene",
       "thrust_sea_level":{
          "kN":845,
          "lbf":190000
       },
       "thrust_vacuum":{
          "kN":914,
          "lbf":205500
       },
       "thrust_to_weight":180.1
    },
    "landing_legs":{
       "number":4,
       "material":"carbon fiber"
    },
    "description":"Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit."
 };