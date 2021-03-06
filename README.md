# Climber Cards
> Table extension with cards as cells, developed for showcasing items with images. Responsive design and selection enabled, both click and swipes. Multiple layout options and Select and Go To Sheet mode

## Screenshots
Portrait 
![Alt text](/screenshots/layout_modes_portrait.PNG?raw=true "Portrait")
Landscape
![Alt text](/screenshots/layout_modes_landscape.PNG?raw=true "Landscape")
## Installation

1. Download the latest version
2. Qlik Sense Desktop
	* To install, copy all files in the .zip file to folder "C:\Users\[%Username%]\Documents\Qlik\Sense\Extensions\Cards"
3. Qlik Sense Server
	* See instructions [how to import an extension on Qlik Sense Server](http://help.qlik.com/en-US/sense/Subsystems/ManagementConsole/Content/import-extensions.htm)

## Configuration
![Alt text](/screenshots/propertypanel_dimensions.PNG?raw=true "Dimensions")
* 1st dimension is the unique identifier that will be selected if a card is selected. The identifier won't show up on the card. 
* 2nd dimension is the image and needs a url for source. 
  * Example url string: 'http://ia.media-imdb.com/images/M/MV5BMjEyMjcyNDI4MF5BMl5BanBnXkFtZTcwMDA5Mzg3OA@@._V1_UX34_CR0,0,34,50_AL_.jpg'
  * Example reference an image from Qlik Sense default repository: '../content/Default/Qlik_default_flower.png'
* 3rd dimension is the title of the card. 
* 4th dimension is optional and will show up under the title.  

# Selection modes
It is possible to use selections to go to another sheet. 
When "Select and goto sheet" is enabled, swipe selections are disabled. (I.e. it is only possible to select one row in the table.) If one value is already selected it will be deselected and no goto sheet action taken.  
![Alt text](/screenshots/propertypanel_selectionmode.PNG?raw=true "Selection mode - Selections")  
![Alt text](/screenshots/propertypanel_selectionmode_gotosheet.PNG?raw=true "Selection mode - Select and goto sheet")  
# Layout modes  
See large screenshots above for examples on how the different options display.  
![Alt text](/screenshots/propertypanel_layoutmode.PNG?raw=true "Layout modes")  

Layout mode options
* Small
* Medium
* Large

Image mode options
* Portrait
* Landscape
* Square

Image Size mode options
* Contain - Scale to the largest size such that both its width and its height can fit inside the content area
* Cover - Scale to be as large as possible so that the background area is completely covered by the background image. Some parts of the background image may not be in view within the background positioning area.
* Fill - Scale to fill the space. This may significantly distort the image.


Sample app can be found here under the project folders \sample app\Cards.qvf.  

## Contributing
Contributing to this project is welcome. The process to do so is outlined below:

1. Create a fork of the project
2. Work on whatever bug or feature you wish
3. Create a pull request (PR)

I cannot guarantee that I will merge all PRs.

## Author

**Karl Fredberg Sjöstrand**
**Karl Fredberg Sjöstrand @ Climber**
* http://github.com/ClimberAB


## Change Log

See [CHANGELOG](CHANGELOG.yml)

## License & Copyright
The software is made available "AS IS" without any warranty of any kind under the MIT License (MIT).

See [Additional license information for this solution.](LICENSE.md)




