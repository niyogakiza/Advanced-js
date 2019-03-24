/* eslint-disable no-useless-escape */
import api from '../RequestFactory'
import parseExpressJobs from '../../transformers/parseExpressJobs'

/**
 *
 * @returns {Promise<any | never>}
 */

// export default () => {
//   return api
//     .get('express-orders', { filters: { statuses: [EXPRESS_STATUS_AWAITING_INSTALLATION] } })
//     .then(parseExpressJobs)
// }

const data = {
  'data': [{
    'type': 'express-order',
    'id': '0',
    'attributes': {
      'orderNumber': '645634985',
      'dateReceived': 1541808000,
      'expectedInstallationDate': 1546041600,
      'status': 'awaiting_installation',
      'boiler_location': 'kitchen'
    },
    'relationships': {
      'installationAddress': {
        'data': {
          'type': 'address',
          'id': '1'
        }
      },
      'customerPhotos': {
        'data': [
          {
            'type': 'customer-photo',
            'id': '1'
          },
          {
            'type': 'customer-photo',
            'id': '2'
          },
          {
            'type': 'customer-photo',
            'id': '3'
          }
        ]
      },
      'package': {
        'data': {
          'type': 'package',
          'id': '1'
        }
      }
    }
  },
  {
    'type': 'express-order',
    'id': '1',
    'attributes': {
      'orderNumber': '645634985',
      'dateReceived': -72057600,
      'expectedInstallationDate': 1546041600,
      'boiler_location': 'bathroom',
      'status': 'awaiting_evidence'
    },
    'relationships': {
      'installationAddress': {
        'data': {
          'type': 'address',
          'id': '1'
        }
      },
      'customerPhotos': {
        'data': [
          {
            'type': 'customer-photo',
            'id': '1'
          },
          {
            'type': 'customer-photo',
            'id': '2'
          },
          {
            'type': 'customer-photo',
            'id': '3'
          }
        ]
      },
      'package': {
        'data': {
          'type': 'package',
          'id': '2'
        }
      }
    }
  },
  {
    'type': 'express-order',
    'id': '2',
    'attributes': {
      'orderNumber': '70977987779',
      'dateReceived': 1516924800,
      'expectedInstallationDate': 1532304000,
      'boiler_location': 'Dinning',
      'status': 'installation_complete'
    },
    'relationships': {
      'installationAddress': {
        'data': {
          'type': 'address',
          'id': '2'
        }
      },
      'customerPhotos': {
        'data': [
          {
            'type': 'customer-photo',
            'id': '1'
          },
          {
            'type': 'customer-photo',
            'id': '2'
          },
          {
            'type': 'customer-photo',
            'id': '3'
          }
        ]
      },
      'package': {
        'data': {
          'type': 'package',
          'id': '3'
        }
      }
    }
  },
  {
    'type': 'express-order',
    'id': '3',
    'attributes': {
      'orderNumber': '8708608979087',
      'dateReceived': 1516924800,
      'expectedInstallationDate': 1532304000,
      'status': 'installation_complete',
      'boiler_location': 'kitchen'
    },
    'relationships': {
      'installationAddress': {
        'data': {
          'type': 'address',
          'id': '3'
        }
      },
      'customerPhotos': {
        'data': [
          {
            'type': 'customer-photo',
            'id': '1'
          },
          {
            'type': 'customer-photo',
            'id': '2'
          },
          {
            'type': 'customer-photo',
            'id': '3'
          }
        ]
      },
      'package': {
        'data': {
          'type': 'package',
          'id': '1'
        }

      }
    }
  },
  {
    'type': 'express-order',
    'id': '4',
    'attributes': {
      'orderNumber': '89709778907',
      'dateReceived': 1516924800,
      'expectedInstallationDate': 1532304000,
      'status': 'installation_complete',
      'boiler_location': 'bathroom'
    },
    'relationships': {
      'installationAddress': {
        'data': {
          'type': 'address',
          'id': '4'
        }
      },
      'customerPhotos': {
        'data': [
          {
            'type': 'customer-photo',
            'id': '1'
          },
          {
            'type': 'customer-photo',
            'id': '2'
          },
          {
            'type': 'customer-photo',
            'id': '3'
          }
        ]
      },
      'package': {
        'data': {
          'type': 'package',
          'id': '2'
        }
      }
    }
  },
  {
    'type': 'express-order',
    'id': '5',
    'attributes': {
      'orderNumber': '879070787079',
      'dateReceived': 1516924800,
      'expectedInstallationDate': 1532304000,
      'status': 'installation_complete',
      'boiler_location': 'dinning'
    },
    'relationships': {
      'installationAddress': {
        'data': {
          'type': 'address',
          'id': '5'
        }
      },
      'customerPhotos': {
        'data': [
          {
            'type': 'customer-photo',
            'id': '1'
          },
          {
            'type': 'customer-photo',
            'id': '2'
          },
          {
            'type': 'customer-photo',
            'id': '3'
          }
        ]
      },
      'package': {
        'data': {
          'type': 'package',
          'id': '3'
        }
      }
    }
  },
  {
    'type': 'express-order',
    'id': '6',
    'attributes': {
      'orderNumber': '43261246126446',
      'dateReceived': 1516924800,
      'expectedInstallationDate': 1532304000,
      'status': 'installation_complete',
      'boiler_location': 'kitchen'
    },
    'relationships': {
      'installationAddress': {
        'data': {
          'type': 'address',
          'id': '6'
        }
      },
      'customerPhotos': {
        'data': [
          {
            'type': 'customer-photo',
            'id': '1'
          },
          {
            'type': 'customer-photo',
            'id': '2'
          },
          {
            'type': 'customer-photo',
            'id': '3'
          }
        ]
      },
      'package': {
        'data': {
          'type': 'package',
          'id': '1'
        }
      }
    }
  },
  {
    'type': 'express-order',
    'id': '7',
    'attributes': {
      'orderNumber': '2136497236452356',
      'dateReceived': 1516924800,
      'expectedInstallationDate': 1532304000,
      'status': 'installation_complete',
      'boiler_location': 'kitchen'
    },
    'relationships': {
      'installationAddress': {
        'data': {
          'type': 'address',
          'id': '7'
        }
      },
      'customerPhotos': {
        'data': [
          {
            'type': 'customer-photo',
            'id': '1'
          },
          {
            'type': 'customer-photo',
            'id': '2'
          },
          {
            'type': 'customer-photo',
            'id': '3'
          }
        ]
      },
      'package': {
        'data': {
          'type': 'package',
          'id': '2'
        }
      }
    }
  },
  {
    'type': 'express-order',
    'id': '8',
    'attributes': {
      'orderNumber': '0979824732893',
      'dateReceived': 1516924800,
      'expectedInstallationDate': 1532304000,
      'status': 'installation_complete',
      'boiler_location': 'kitchen'
    },
    'relationships': {
      'installationAddress': {
        'data': {
          'type': 'address',
          'id': '8'
        }
      },
      'customerPhotos': {
        'data': [
          {
            'type': 'customer-photo',
            'id': '1'
          },
          {
            'type': 'customer-photo',
            'id': '2'
          },
          {
            'type': 'customer-photo',
            'id': '3'
          }
        ]
      },
      'package': {
        'data': {
          'type': 'package',
          'id': '3'
        }
      }
    }
  }],
  'included': [
    {
      'type': 'address',
      'id': '0',
      'attributes': {
        'title': 'Mr',
        'firstName': 'Aimable',
        'lastName': 'Bosch',
        'phone': '07603 392811',
        'email': 'example2018@gmail.com',
        'unitNumber': null,
        'houseNumber': 1,
        'buildingName': 'Holla',
        'street': 'Ikon Estate',
        'district': 'Solihull',
        'city': 'Hartlebury',
        'country': 'GB',
        'postcode': 'C15 RT20',
        'longitude': null,
        'latitude': null
      }
    },
    {
      'type': 'address',
      'id': '1',
      'attributes': {
        'title': 'Mr',
        'firstName': 'Aline',
        'lastName': 'Bosch',
        'phone': '07603 392811',
        'email': 'aline2018@gmail.com',
        'unitNumber': null,
        'houseNumber': 1,
        'buildingName': 'Indiana',
        'street': 'Ikon Estate',
        'district': 'Solihull',
        'city': 'Hartlebury',
        'country': 'US',
        'postcode': 'C15 RT20',
        'longitude': null,
        'latitude': null
      }
    },
    {
      'type': 'address',
      'id': '2',
      'attributes': {
        'title': 'Mr',
        'firstName': 'Brad',
        'lastName': 'Bosch',
        'phone': '07603 392811',
        'email': 'blad2018@gmail.com',
        'unitNumber': null,
        'houseNumber': 1,
        'buildingName': 'Heee',
        'street': 'Darful Estate',
        'district': 'Somalia',
        'city': 'Darful',
        'country': 'SO',
        'postcode': 'SO15 RT20',
        'longitude': null,
        'latitude': null
      }
    },
    {
      'type': 'address',
      'id': '3',
      'attributes': {
        'title': 'Mr',
        'firstName': 'Ben',
        'lastName': 'Bosch',
        'phone': '07603 392811',
        'email': 'ben2018@gmail.com',
        'unitNumber': null,
        'houseNumber': 1,
        'buildingName': 'Helll',
        'street': 'Ikona Estate',
        'district': 'Paladise',
        'city': 'Birmigham',
        'country': 'GB',
        'postcode': 'C15 RT20',
        'longitude': null,
        'latitude': null
      }
    },
    {
      'type': 'address',
      'id': '4',
      'attributes': {
        'title': 'Mr',
        'firstName': 'Toby',
        'lastName': 'Bosch',
        'phone': '07603 392811',
        'email': 'toby2018@gmail.com',
        'unitNumber': null,
        'houseNumber': 1,
        'buildingName': 'Holla',
        'street': 'Ikon Estate',
        'district': 'Solihull',
        'city': 'Hartlebury',
        'country': 'GB',
        'postcode': 'C15 RT20',
        'longitude': null,
        'latitude': null
      }
    },
    {
      'type': 'address',
      'id': '5',
      'attributes': {
        'title': 'Mr',
        'firstName': 'Stuart',
        'lastName': 'Bosch',
        'phone': '07603 392811',
        'email': 'stuart2018@gmail.com',
        'unitNumber': null,
        'houseNumber': 1,
        'buildingName': 'Holla',
        'street': 'Ikon Estate',
        'district': 'Solihull',
        'city': 'Hartlebury',
        'country': 'GB',
        'postcode': 'C15 RT20',
        'longitude': null,
        'latitude': null
      }
    },
    {
      'type': 'address',
      'id': '6',
      'attributes': {
        'title': 'Mr',
        'firstName': 'Joy',
        'lastName': 'Bosch',
        'phone': '07603 392811',
        'email': 'joy2018@gmail.com',
        'unitNumber': null,
        'houseNumber': 1,
        'buildingName': 'Holla',
        'street': 'Ikon Estate',
        'district': 'Solihull',
        'city': 'Hartlebury',
        'country': 'GB',
        'postcode': 'C15 RT20',
        'longitude': null,
        'latitude': null
      }
    },
    {
      'type': 'address',
      'id': '7',
      'attributes': {
        'title': 'Mr',
        'firstName': 'Joy',
        'lastName': 'Bosch',
        'phone': '07603 392811',
        'email': 'joy2018@gmail.com',
        'unitNumber': null,
        'houseNumber': 1,
        'buildingName': 'Holla',
        'street': 'Ikon Estate',
        'district': 'Solihull',
        'city': 'Hartlebury',
        'country': 'GB',
        'postcode': 'C15 RT20',
        'longitude': null,
        'latitude': null
      }
    },
    {
      'type': 'address',
      'id': '8',
      'attributes': {
        'title': 'Mr',
        'firstName': 'Pascal',
        'lastName': 'Bosch',
        'phone': '07603 392811',
        'email': 'example2018@gmail.com',
        'unitNumber': null,
        'houseNumber': 1,
        'buildingName': 'Holla',
        'street': 'Ikon Estate',
        'district': 'Solihull',
        'city': 'Hartlebury',
        'country': 'GB',
        'postcode': 'C15 RT20',
        'longitude': null,
        'latitude': null
      }
    },
    {
      'type': 'customer-photo',
      'id': '1',
      'attributes': {
        'location': 'inside',
        'name': 'https://picsum.photos/600/400',
        'mime_type': 'image\/jpeg',
        'file_size': '2520'
      }
    },
    {
      'type': 'customer-photo',
      'id': '2',
      'attributes': {
        'location': 'outside',
        'name': 'https://picsum.photos/900/400',
        'mime_type': 'image\/jpeg',
        'file_size': '1180'
      }
    },
    {
      'type': 'customer-photo',
      'id': '3',
      'attributes': {
        'location': 'pipwork',
        'name': 'https://picsum.photos/650/400',
        'mime_type': 'image\/jpeg',
        'file_size': '2952'
      }
    },
    {
      'type': 'package',
      'id': '1',
      'attributes': {
        'name': 'Greenstar 30i combi',
        'description': 'The 30i is our most popular combi boiler, combining great heating and hot water comfort with high energy efficiency and performance.',
        'price': '\u00a317.15',
        'energy': 'Great energy efficiency'
      }
    },
    {
      'type': 'package',
      'id': '2',
      'attributes': {
        'name': 'Greenstar 30Si Compact combi',
        'description': 'Our 30Si is designed to fit in a standard kitchen cupboard and has an easy to use control that allows you to fine tune your comfort.',
        'price': '\u00a317.15',
        'energy': 'Great energy efficiency',
        'cupboard': 'Fits in a cupboard'
      }
    },
    {
      'type': 'package',
      'id': '3',
      'attributes': {
        'name': 'Greenstar 36CDi Compact combi',
        'description': 'The CDi Compact is a high performance combi boiler, delivering the best in heating and hot water comfort.',
        'price': '\u00a317.15',
        'energy': 'Great energy efficiency',
        'cupboard': 'Fits in a cupboard',
        'water': 'Fastest hot water'
      }
    }
  ]
}
export default () => api.echo(() => ({ data }), 1000).then(parseExpressJobs)

