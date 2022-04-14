import React from 'react'
import VirtualEventDetailPaket from './component/ve_detail_paket'
import VirtualEventExpoHall from './component/ve_expo_hall'
import VirtualEventHome from './component/ve_home'
import VirtualEventPilihan from './component/ve_pilhan_tampilan'

const VirtualEvent = () => {
  return (
    <>
        <VirtualEventHome/>

        <VirtualEventPilihan/>

        <VirtualEventExpoHall/>

        <VirtualEventDetailPaket/>
    </>
  )
}

export default VirtualEvent