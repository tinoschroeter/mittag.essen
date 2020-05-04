FROM ubuntu:18.04

RUN apt-get update && apt-get install -y apache2 locales lolcat && apt-get clean
# Set the locale
RUN sed -i -e 's/# en_US.UTF-8 UTF-8/en_US.UTF-8 UTF-8/' /etc/locale.gen && locale-gen
ENV LANG en_US.UTF-8  
ENV LANGUAGE en_US:en  
ENV LC_ALL en_US.UTF-8    
RUN a2enmod cgid rewrite
ADD default /etc/apache2/sites-enabled/000-default.conf
ADD index.cgi /usr/lib/cgi-bin/
ADD web /var/www/html
ADD 404.html /var/www/html
ADD AvenirNextLTPro-Demi.otf /var/www/html
ADD data.json /var/www/html
ADD favicon.ico /var/www/html
ADD output.png /var/www/html
ADD preview.png /var/www/html
ADD data /var/www/html/data
CMD rm /var/www/html/index.html
CMD /usr/sbin/apache2ctl -D FOREGROUND
