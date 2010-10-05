" Jetpack package configuration file "

from django.conf import settings
import os.path

PACKAGES_PER_PAGE = getattr(settings, 'PACKAGES_PER_PAGE', 10)
MINIMUM_PACKAGE_ID = getattr(settings, 'MINIMUM_PACKAGE_ID', 1000000)
INITIAL_VERSION_NAME = getattr(settings, 'INITIAL_VERSION_NAME', 'initial')
UPLOAD_DIR = getattr(settings, 'UPLOAD_DIR',
                     '%supload' % settings.FRAMEWORK_PATH)
DEFAULT_LIB_DIR = getattr(settings, 'JETPACK_LIB_DIR', 'lib')
DEFAULT_DATA_DIR = getattr(settings, 'JETPACK_DATA_DIR', 'data')
PACKAGE_PLURAL_NAMES = {
    'l': 'libraries',
    'a': 'addons'
}
PACKAGE_SINGULAR_NAMES = {
    'l': 'library',
    'a': 'addon'
}
DEFAULT_PACKAGE_FULLNAME = {
    'l': 'My Library',
    'a': 'My Add-on'
}
HOMEPAGE_PACKAGES_NUMBER = getattr(settings, 'HOMEPAGE_PACKAGES_NUMBER', 3)
SDKDIR_PREFIX = '/tmp/SDK'
LIBRARY_AUTOCOMPLETE_LIMIT = getattr(settings,
                                'JETPACKLIBRARY_AUTOCOMPLETE_LIMIT', 20)
KEYDIR = 'keydir'

# ------------------------------------------------------------------------
JETPACK_NEW_IS_BASE = False  # it shouldn't be changed
JETPACK_ITEMS_PER_PAGE = getattr(settings, 'JETPACK_ITEMS_PER_PAGE', 10)

# ------------------------------------------------------------------------
VIRTUAL_ENV = settings.VIRTUAL_ENV
VIRTUAL_SITE_PACKAGES = settings.VIRTUAL_SITE_PACKAGES
FRAMEWORK_PATH = settings.FRAMEWORK_PATH
DEBUG = settings.DEBUG
HOMEPAGE_ITEMS_LIMIT = settings.HOMEPAGE_ITEMS_LIMIT
SDK_SOURCE_DIR = getattr(settings, 'SDK_SOURCE_DIR',
                         os.path.join(FRAMEWORK_PATH, 'sdk_versions/'))