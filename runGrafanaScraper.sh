#!/bin/bash


COUTPUT=$(curl "Accept: application/json" -H "Content-Type: application/json" http://localhost:3000/grafana)
echo $COUTPUT
CONTENT="<html> <head></head> <body>
<p>DLY_TREND</p> </br>
<img src='cid:DLY_TREND.jpeg' /> </br></br>
<p>WKLY_TREND</p> </br>
<img src='cid:WKLY_TREND.jpeg' /> </br></br>
<p>MNTHLY_TREND</p> </br>
<img src='cid:MNTHLY_TREND.jpeg' /> </br></br>
 </br> This is an automatically generated email [$(date)] -  Automation </body> </html>";
echo $CONTENT | tee /home/automation/gs.html
# MOUTPUT=$(mail -r hariom.devops@gmail.com -s "Grafana Trend Screens | $(date) " -a /home/automation/DLY_TREND.jpeg -a /home/automation/WKLY_TREND.jpeg -a /home/automation/MNTHLY_TREND.jpeg hariom.devops@gmail.com <<< "Grafana Trend Screens [$(date)] -  Automation")
 
 MOUTPUT=$(mutt -e "my_hdr From:hariom.devops@gmail.com;set content_type=text/html" hariom.devops@gmail.com -s "Grafana AIO Source Trend Screens| $(date)" -a /home/automation/DLY.jpeg -a /home/automation/WKLY.jpeg -a /home/automation/MNTHLY.jpeg   < /home/automation/gs.html)
 echo $MOUTPUT
 rm /home/automation/gs.html