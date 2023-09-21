#Tool for infinite scroll a webpage

#Dependencies:
#   > pip install selenium

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

# Set up a WebDriver (you'll need a compatible browser and the driver executable)
# For example, if you're using Chrome, download ChromeDriver and provide its path.
driver = webdriver.Chrome(executable_path='/path/to/chromedriver')

# Navigate to the web page you want to scroll
url = "https://example.com"  # Replace with the URL of the target page
driver.get(url)

# Define the number of times you want to scroll (adjust as needed)
scroll_count = 10

# Function to simulate scrolling down the page
def scroll_down():
    html = driver.find_element_by_tag_name('html')
    html.send_keys(Keys.PAGE_DOWN)

# Perform scrolling action 'scroll_count' times
for _ in range(scroll_count):
    scroll_down()
    time.sleep(2)  # Adjust the sleep time as needed to allow content to load

# Optionally, you can perform other actions or scraping tasks here

# Close the WebDriver when done
driver.quit()
